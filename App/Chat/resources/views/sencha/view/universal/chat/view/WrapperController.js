Ext.define('Melisa.chat.view.universal.chat.view.WrapperController', {
    extend: 'Melisa.core.ViewController',
    alias: 'controller.chatchatview',
    
    requires: [
        'Melisa.ux.Socket'
    ],
    
    config: {
        socket: null,
        client: null
    },
    
    onRender: function() {
        
        var me = this,
            vm = me.getViewModel(),
            client = Ext.create('Melisa.ux.Socket'),
            socket;
        
        moment.locale('es');
        moment.defineLocale('es', {
            relativeTime : {
                past: '%s'
            }
        });
        
        if( !client.connect(vm.get('urls.realtime'))) {
            
            return false;
            
        }
        
        me.setSocket(socket = client.getSocket());
        me.setClient(client);
        
        socket.on('login', me.onLogin.bind(me));
        socket.on('list identities', me.onListIdentities.bind(me));
        socket.on('socket disconnected', me.onSocketDisconnected.bind(me));
        socket.on('identity connected', me.onIdentityConnected.bind(me));
        socket.on('identity writing', me.onIdentityWriting.bind(me));
        socket.on('identity send message', me.onIdentitySendMessage.bind(me));
        socket.on('message received', me.onMessageReceived.bind(me));
        
    },
    
    onLogin: function() {
        
        var me = this,
            client = me.getClient();
        console.log(client);
        client.emit('login', Ext.manifest.melisa.identity);
        
    },
    
    onListIdentities: function(response) {
        
        var me = this,
            records = Ext.decode(response, true),
            contacts = me.getViewModel().getStore('contacts'),
            list = [];
    
        me.log('on list identities', records);
    
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
    
    onIdentityWriting: function(idSocketEmisor) {
        
        var me = this,
            model = me.getViewModel(),
            contacts = model.getStore('contacts'),
            record = contacts.findRecord('idSocket', idSocketEmisor),
            chatActive = model.get('chatActive');
    
        me.log('identity writing', idSocketEmisor);
        
        if( !record) {            
            me.log('identity no exist in list chat ignore event');
            return;            
        }
        
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
            stoMessages = model.createStore(nameStore);            
        }
        
        return model.getStore(nameStore);
        
    },
    
    onMessageReceived: function(idMessage, idIdentityReceiver) {
        
        var me = this,
            message = Ext.decode(message, true),
            stoMessages = me.createStoreMessages(idIdentityReceiver),
            record = stoMessages.findRecord('id', idMessage);
    
        me.log('message received', idMessage);
        
        if( record) {            
            record.set('status', 'server-received');            
        }
        
    },
    
    onSocketDisconnected: function(idSocket) {        
        
        var me = this,
            model = me.getViewModel(),
            contacts = model.getStore('contacts'),
            record = contacts.findRecord('idSocket', idSocket),
            chatActive = model.get('chatActive');
        
        me.log('socket disconnect', idSocket);
        
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
    
});
