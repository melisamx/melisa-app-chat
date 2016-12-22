Ext.define('Melisa.chat.view.phone.chat.view.Chat', {
    extend: 'Ext.Container',
    alias: 'widget.chatviewchat',
    
    requires: [
        'Melisa.chat.view.phone.chat.view.ChatToolbarTop',
        'Melisa.chat.view.phone.chat.view.ChatMessages'
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
            reference: 'lisMessages',
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
                    flex: 1,
                    listeners: {
                        keyup: 'onKeyupTxtMessage'
                    }
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa fa-camera'
                }
            ]
        }
    ]
});
