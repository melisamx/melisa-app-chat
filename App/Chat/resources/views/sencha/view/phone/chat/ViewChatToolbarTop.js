Ext.define('Melisa.chat.view.phone.chat.ViewChatToolbarTop', {
    extend: 'Ext.Toolbar',
    alias: 'widget.chatviewchattoolbartop',
    
    items: [
        {
            xtype: 'button',
            iconCls: 'x-fa fa fa-arrow-left',
            cls: 'button-close',
            tpl: [
                '<tpl for="data">',
                '<i class="avatar x-fa fa fa-user-circle-o {avatar}"></i>',
                '</tpl>'
            ],
            bind: {
                data: '{chatActive}'
            },
            listeners: {
                tap: 'onTapBtnChatClose'
            }
        },
        {
            xtype: 'button',
            cls: 'button-contact',
            height: 38,
            flex: 1,
            tpl: [
                '<tpl for="data">',
                    '<p class="name">{name}</p>',
                    '<tpl if="oline">',
                        '<p class="lastConnection">en línea</p>',
                    '<tpl else>',
                        '<p class="lastConnection">{[this.pretyDate(values.lastConnection)]}</p>',
                    '</tpl>',
                '</tpl>',
                {

                    now: new Date(),

                    pretyDate: function(fecha) {

                        var dayDiff = moment(fecha).diff(this.now, 'days'),
                            prefix = 'últ. vez ';

                        if(dayDiff === 0) {

                            return prefix + 'hoy a las ' + moment(fecha).format('h:mm a');

                        } else if(dayDiff === -1) {

                            return prefix + 'Ayer, a las ' + 
                                moment(fecha).format('h:mm a');

                        }

                        return prefix + moment(fecha).format('DD-MM-YYYY');

                    }

                }
            ],
            bind: {
                data: '{chatActive}'
            }
        }
    ]
});
