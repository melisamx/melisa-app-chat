Ext.define('Melisa.chat.view.universal.chat.view.WrapperModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.chatchatview',
    
    data: {
        chatActive: {}
    },
    stores: {
        contacts: {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '{modules.contacts}',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        },
        chats: {},
        messages: {}
    }
});
