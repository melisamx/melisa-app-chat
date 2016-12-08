Ext.define('Melisa.chat.view.phone.chat.ViewWrapper', {
    extend: 'Melisa.panel.ux.Wrapper',
    
    requires: [
        'Melisa.core.Module',
        
        'Melisa.chat.view.phone.chat.UsersList',
        'Melisa.chat.view.phone.chat.ContactsList'
    ],
    
    mixins: [
        'Melisa.core.Module'
    ],
    
    layout: 'fit',
    viewModel: {},
    items: [
        {
            xtype: 'tabpanel',
            items: [
                {
                    xtype: 'appchatuserslist',
                    title: 'CHATS'
                },
                {
                    xtype: 'appchatcontactslist',
                    title: 'CONTACTOS'
                }
            ]
        }
    ]
});
