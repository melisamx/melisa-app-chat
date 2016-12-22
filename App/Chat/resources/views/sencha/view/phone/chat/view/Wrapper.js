Ext.define('Melisa.chat.view.phone.chat.view.Wrapper', {
    extend: 'Melisa.panel.ux.Wrapper',
    
    requires: [
        'Melisa.core.Module',
        'Melisa.chat.view.phone.chat.view.WrapperTitle',
        'Melisa.chat.view.phone.chat.view.ChatsList',
        'Melisa.chat.view.phone.chat.view.Chat',
        'Melisa.chat.view.phone.chat.view.ContactsList',
        'Melisa.chat.view.phone.chat.view.WrapperController'
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
            xtype: 'chatwrappertitle'
        },
        {
            xtype: 'tabpanel',
            bind: {
                hidden: '{!conChatView.hidden}'
            },
            items: [
                {
                    xtype: 'chatchatslist',
                    cls: 'chats-list',
                    title: 'CHATS',
                    listeners: {
                        itemtap: 'onItemtapChatsList'
                    }
                },
                {
                    xtype: 'chatcontactslist',
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
