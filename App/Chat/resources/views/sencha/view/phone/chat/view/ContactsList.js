Ext.define('Melisa.chat.view.phone.chat.view.ContactsList', {
    extend: 'Ext.List',
    alias: 'widget.chatcontactslist',
    
    loadingText: 'Obteniendo lista de contactos',
    emptyText: 'No hay contactos',
    deferEmptyText: true,
    striped: true,
    bind: {
        store: '{contacts}'
    },
    itemTpl: [
        '<i class="x-fa fa fa-user-circle-o {avatar}" aria-hidden="true"></i>',
        '<p class="name">{name}</p>',
        '<tpl if="writing==1">',
        '<span class="writing">escribiendo...</span>',
        '<tpl else>',
        '<p class="actual-state">&nbsp;{actualState}</p>',
        '</tpl>',
        '<span class="{[ values.online ? "online" : "offline"]}"></span>'
    ]
});