Ext.define('Melisa.chat.view.phone.chat.ViewWrapperController', {
    extend: 'Melisa.core.ViewController',    
    alias: 'controller.chatviewwrapper',
    
    requires: [
        'Melisa.util.faker.Faker'
    ],
    
    onRender: function() {
        
        var me = this,
            model = me.getViewModel();
        
        model.getStore('contacts').setData(jsf(model.get('faker.contacts')));
        model.getStore('chats').setData(jsf(model.get('faker.chats')));
        model.getStore('messages').setData(jsf(model.get('faker.messages')));
        
        moment.locale('es');
        moment.defineLocale('es', {
            relativeTime : {
                past: '%s'
            }
        });
        
    },
    
    onItemtapChatsList: function(list, i, t, record) {
        
        var me = this,
            view = me.getView();
        
        me.getViewModel().set('chatActive', record);
        view.setActiveItem(me.lookup('conChatView'));
        
    },
    
    onTapBtnChatClose: function() {
        
        var me = this,
            view = me.getView();
        
        view.setActiveItem(0);
        
    }
    
});
