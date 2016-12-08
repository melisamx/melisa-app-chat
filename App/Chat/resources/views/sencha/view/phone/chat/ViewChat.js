Ext.define('Melisa.chat.view.phone.chat.ViewChat', {
    extend: 'Ext.Container',
    alias: 'widget.chatviewchat',
    
    requires: [
        'Melisa.chat.view.phone.chat.ViewChatToolbarTop',
        'Melisa.chat.view.phone.chat.ViewChatMessages'
    ],
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'chatviewchattoolbartop'
        },
        {
            xtype: 'chatviewchatmessages',
            cls: 'chat-messages',
            flex: 1
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa fa-smile-o'
                },
                {
                    xtype: 'textfield',
                    name: 'message',
                    reference: 'txtMessage',
                    placeHolder: 'Escribir mensaje',
                    flex: 1
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa fa-camera'
                }
            ]
        }
    ]
});
