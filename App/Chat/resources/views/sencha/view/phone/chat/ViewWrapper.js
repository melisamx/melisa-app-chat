Ext.define('Melisa.chat.view.phone.chat.ViewWrapper', {
    extend: 'Melisa.panel.ux.Wrapper',
    
    requires: [
        'Melisa.core.Module',
        
        'Melisa.chat.view.phone.chat.ChatsList',
        'Melisa.chat.view.phone.chat.ViewChat',
        'Melisa.chat.view.phone.chat.ContactsList',
        'Melisa.chat.view.phone.chat.ViewWrapperController'
    ],
    
    mixins: [
        'Melisa.core.Module'
    ],
    
    controller: 'chatviewwrapper',
    layout: 'card',
    cls: 'app-chat-chat-view',
    viewModel: {
        data: {
            chatActive: {}
        },
        stores: {
            contacts: {},
            chats: {},
            messages: {}
        }
    },
    items: [
        {
            xtype: 'tabpanel',
            bind: {
                hidden: '{!conChatView.hidden}'
            },
            items: [
                {
                    xtype: 'appchatchatslist',
                    cls: 'chats-list',
                    title: 'CHATS',
                    listeners: {
                        itemtap: 'onItemtapChatsList'
                    }
                },
                {
                    xtype: 'appchatcontactslist',
                    cls: 'contacts-list',
                    title: 'CONTACTOS',
                    listeners: {
                        itemtap: 'onItemtapChatsList'
                    }
                }
            ]
        },
        {
            xtype: 'chatviewchat',
            reference: 'conChatView',
            cls: 'chat',
            publishes: [
                'hidden'
            ]
        }
    ]
});
