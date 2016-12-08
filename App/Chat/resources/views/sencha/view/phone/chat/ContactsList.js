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
        '<p class="actual-state">{actualState}</p>'
    ],
    bind: {
        store: '{contacts}'
    }
});