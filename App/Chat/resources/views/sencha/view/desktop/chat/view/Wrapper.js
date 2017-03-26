Ext.define('Melisa.chat.view.desktop.chat.view.Wrapper', {
    extend: 'Ext.panel.Panel',
    
    requires: [
        'Melisa.core.Module',
        'Melisa.chat.view.desktop.chat.view.contacts.List',
        'Melisa.chat.view.desktop.chat.view.chats.List',
        'Melisa.chat.view.universal.chat.view.WrapperModel',
        'Melisa.chat.view.desktop.chat.view.SelectChat',
        'Melisa.chat.view.desktop.chat.view.WrapperController'
    ],
    
    mixins: [
        'Melisa.core.Module'
    ],
    
    controller: 'chatchatview',
    layout: 'border',
    viewModel: {
        type: 'chatchatview'
    },
    items: [
        {
            region: 'center',
            xtype: 'panel',
            layout: 'card',
            items: [
                {
                    xtype: 'chatchatselectchat'
                }
            ]
        },
        {
            region: 'west',
            width: '30%',
            xtype: 'tabpanel',
            layout: 'fit',
            tabPosition: 'bottom',
            tabBar: {
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                }
            },
            defaults: {
                tabConfig : {
                    flex: 1
                }
            },
            items: [
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Chats',
                    iconCls: 'x-fa fa-comments',
                    items: [
                        {
                            xtype: 'chatchatchatslist'
                        }
                    ],
                    tbar: [
                        {
                            xtype: 'textfield',
                            emptyText: 'Buscar o empezar un chat nuevo',
                            flex: 1
                        }
                    ]
                },
                {
                    iconCls: 'x-fa fa-address-card-o',
                    title: 'Contactos',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'chatchatcontactslist'
                        }
                    ],
                    tbar: [
                        {
                            xtype: 'textfield',
                            emptyText: 'Buscar contactos',
                            flex: 1
                        }
                    ]
                }
            ]
        }
    ]
});
