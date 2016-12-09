Ext.define('Melisa.chat.view.phone.chat.ChatsList', {
    extend: 'Ext.List',
    alias: 'widget.appchatchatslist',
    
    loadingText: 'Obteniendo lista de chats',
    emptyText: 'No hay chats',
    deferEmptyText: true,
    striped: true,
    itemTpl: [
        '<i class="x-fa fa fa-user-circle-o {avatar}"></i>',
        '<p class="name">{name}</p>',
        '<tpl if="writing==1">',
        '<span class="writing">escribiendo...</span>',
        '<tpl else>',
        '<p class="actual-state">&nbsp;{actualState}</p>',
        '</tpl>',
        '<span class="last-connection">{[this.pretyDate(values.lastConnection)]}</span>',
        '<tpl if="totalUnread &gt; 0">',
        '<span class="totalUnread">{totalUnread}</span>',
        '</tpl>',
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
    ],
    bind: {
        store: '{chats}'
    }
});