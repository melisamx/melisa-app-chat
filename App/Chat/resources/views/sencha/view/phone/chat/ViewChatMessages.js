Ext.define('Melisa.chat.view.phone.chat.ViewChatMessages', {
    extend: 'Ext.List',
    alias: 'widget.chatviewchatmessages',
    
    loadingText: 'Obteniendo mensajes',
    emptyText: 'No hay mensajes',
    deferEmptyText: true,
    bind: {
        store: '{messages}'
    },
    itemTpl: [
        '<div class="wrapper {[values.isIncoming == 1 ? "incoming": ""]}">',
            '<div class="text">{message}</div>',
            '<div class="meta">',
                '<span class="date">{[this.pretyDate(values.dateSend)]}</span>',
                '<span class="status {status}">',
                '<tpl switch="status">',
                    '<tpl case="server-received">',
                        '<i class="x-fa fa fa-check"></i>',
                    '<tpl case="contact-received">',
                        '<i class="x-fa fa fa-check"></i>',
                        '<i class="x-fa fa fa-check"></i>',
                    '<tpl case="contact-read">',
                        '<i class="x-fa fa fa-check"></i>',
                        '<i class="x-fa fa fa-check"></i>',
                    '<tpl default>',
                        '<i class="x-fa fa fa-clock-o"></i>',
                '</tpl>',
                '</span>',
            '</div>',
        '</div>',
        {
            
            now: new Date(),
            
            pretyDate: function(fecha) {

                var dayDiff = moment(fecha).diff(this.now, 'days');
                
                if(dayDiff === 0) {

                    return moment(fecha).format('h:mm a');

                } else if(dayDiff === -1) {

                    return 'Ayer, ' + 
                        moment(fecha).format('h:mm a');

                }

                return moment(fecha).format('DD-MM-YYYY');

            }
            
        }
    ]
});
