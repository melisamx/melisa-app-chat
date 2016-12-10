Ext.define('Melisa.chat.view.phone.chat.ContactsList', {
    extend: 'Ext.List',
    alias: 'widget.appchatcontactslist',
    
    loadingText: 'Obteniendo lista de contactos',
    emptyText: 'No hay contactos',
    deferEmptyText: true,
    striped: true,
    itemTpl: [
        '<i class="x-fa fa fa-user-circle-o {avatar}" aria-hidden="true"></i>',
        '<p class="name">{name}</p>',
        '<tpl if="writing==1">',
        '<span class="writing">escribiendo...</span>',
        '<tpl else>',
        '<p class="actual-state">&nbsp;{actualState}</p>',
        '</tpl>'
    ],
    bind: {
        store: '{contacts}'
    }
});