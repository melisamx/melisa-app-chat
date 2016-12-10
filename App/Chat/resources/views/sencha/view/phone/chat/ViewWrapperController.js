Ext.define('Melisa.chat.view.phone.chat.ViewWrapperController', {
    extend: 'Melisa.core.ViewController',    
    alias: 'controller.chatviewwrapper',
    
    requires: [
        'Melisa.util.faker.Faker',
        'Melisa.ux.Socket'
    ],
    
    config: {
        socket: null,
        client: null
    },
    
    onRender: function() {
        
        var me = this,
            model = me.getViewModel(),
            client = Ext.create('Melisa.ux.Socket'),
            socket;
        
        model.getStore('contacts').setData(jsf(model.get('faker.contacts')));
        model.getStore('chats').setData(jsf(model.get('faker.chats')));
        model.getStore('messages').setData(jsf(model.get('faker.messages')));
        
        moment.locale('es');
        moment.defineLocale('es', {
            relativeTime : {
                past: '%s'
            }
        });
        
        if( !client.connect(model.get('urls.realtime'))) {
            
            return false;
            
        }
        
        me.setSocket(socket = client.getSocket());
        me.setClient(client);
        
        socket.on('login', me.onLogin.bind(me));
        socket.on('list identities', me.onListIdentities.bind(me));
        socket.on('identity disconnected', me.onIdentityDisconnected.bind(me));
        socket.on('identity connected', me.onIdentityConnected.bind(me));
        socket.on('identity writing', me.onIdentityWriting.bind(me));
        socket.on('identity send message', me.onIdentitySendMessage.bind(me));
        socket.on('message received', me.onMessageReceived.bind(me));
        
    },
    
    onMessageReceived: function(idMessage, idIdentityReceiver) {
        
        var me = this,
            message = Ext.decode(message, true),
            stoMessages = me.createStoreMessages(idIdentityReceiver),
            record = stoMessages.findRecord('id', idMessage);
    
        me.log('message recedived', idMessage);
        
        if( record) {
            
            record.set('status', 'server-received');
            
        }
        
    },
    
    onIdentitySendMessage: function(message) {
        
        var me = this,
            message = Ext.decode(message, true),
            stoMessages = me.createStoreMessages(message.idIdentityTransmitter);
        
        message.isIncoming = true;
        stoMessages.add(message);
        
    },
    
    createStoreMessages: function(id) {
        
        var me = this,
            model = me.getViewModel(),
            nameStore = 'messages-' + id,
            stoMessages = model.getStore(nameStore);
    
        if( stoMessages === null) {
            
            stoMessages = model.createStore(nameStore);;
            
        }
        
        return model.getStore(nameStore);
        
    },
    
    onIdentityWriting: function(idSocketEmisor) {
        
        var me = this,
            model = me.getViewModel(),
            contacts = model.getStore('contacts'),
            record = contacts.findRecord('idSocket', idSocketEmisor),
            chatActive = model.get('chatActive');
    
        if( typeof record.set === 'undefined') {
            
            me.log('no exist idSocket writing', idSocketEmisor);
            return;
            
        }
        
        record.set('writing', true);
        setTimeout(function() {
            record.set('writing', false);
        }, 5000);
        
        if( typeof chatActive.get === 'undefined') {
            
            return;
            
        }

        if( chatActive.get('idSocket') === idSocketEmisor) {
                
            
            chatActive.set('writing', true);
            /* necesary no bind changes */
            me.lookup('btnChatContact').setData(chatActive);
            
            setTimeout(function() {
                
                chatActive.set('writing', false);
                /* necesary no bind changes */
                me.lookup('btnChatContact').setData(chatActive);
                
            }, 5000);
            
        }
        
    },
    
    onIdentityConnected: function(response) {
        
        var me = this,
            identity = Ext.decode(response, true),
            model = me.getViewModel(),
            contacts = model.getStore('contacts'),
            record = contacts.findRecord('id', identity.id),
            chatActive = model.get('chatActive');
    
        if( record) {
            
            record.set({
                idSocket: identity.idSocket,
                online: true
            });
            
            if( typeof chatActive.get === 'undefined') {
            
                return;

            }
            
            if( chatActive.get('id') === identity.id) {
                
                chatActive.set({
                    idSocket: identity.idSocket,
                    online: true
                });
                
            }
            
            return;
            
        }
        
        contacts.add({
            id: identity.id,
            idSocket: identity.idSocket,
            name: identity.name,
            avatar: identity.avatar,
            online: identity.online,
            writing: false
        });
        
    },
    
    onKeyupTxtMessage: function(field, e) {
        
        var me = this,
            chatActive = me.getViewModel().get('chatActive'),
            message = field.getValue(),
            stoMessages,
            record;
        
        if(e.getCharCode() !== 13) {
            
            if( !chatActive.data.idSocket || Ext.isEmpty(message)) {
                
                return;
                
            }
            
            me.getSocket().emit('identity writing', chatActive.get('idSocket'), me.getSocket().id);
            return;
            
        }
        
        stoMessages = me.createStoreMessages(chatActive.get('id'));
        record = stoMessages.add({
            idIdentityTransmitter: Ext.manifest.melisa.identity.id,
            idIdentityReceiver: chatActive.get('id'),
            status: 'wait-send',
            message: message
        });
        
        me.getSocket().emit('identity send message', chatActive.get('id'), message, record[0].id);
        
        field.reset();
        field.focus();
        
    },
    
    onIdentityDisconnected: function(idSocket) {        
        
        var me = this,
            model = me.getViewModel(),
            contacts = model.getStore('contacts'),
            record = contacts.findRecord('idSocket', idSocket),
            chatActive = model.get('chatActive');
        
        if( !record) {
            
            return;
            
        }
        
        record.set('online', false);
        
        if( typeof chatActive.get === 'undefined') {
            
            return;

        }
        
        if( chatActive.get('idSocket') === idSocket) {
            
            chatActive.set({
                idSocket: null,
                online: false
            });
            
        }
        
    },
    
    onListIdentities: function(response) {
        
        var me = this,
            records = Ext.decode(response, true),
            contacts = me.getViewModel().getStore('contacts'),
            list = [];
    
        Ext.each(records, function(r) {
            
            list.push({
                id: r.id,
                idSocket: r.idSocket,
                name: r.name,
                avatar: r.avatar,
                online: r.online,
                writing: false
            });
            
        });
        
        contacts.add(list);
        
    },
    
    onLogin: function() {
        
        var me = this,
            socket = me.getSocket();
        
        socket.emit('login', Ext.manifest.melisa.identity);
        
    },
    
    onItemtapChatsList: function(list, i, t, record) {
        
        var me = this,
            view = me.getView(),
            lisMessages = me.lookup('lisMessages');
        
        me.getViewModel().set('chatActive', record);
        view.setActiveItem(me.lookup('conChatView'));
        
        lisMessages.setStore(me.createStoreMessages(record.get('id')));
        
    },
    
    onTapBtnChatClose: function() {
        
        var me = this,
            view = me.getView();
        
        view.setActiveItem(0);
        
    }
    
});
