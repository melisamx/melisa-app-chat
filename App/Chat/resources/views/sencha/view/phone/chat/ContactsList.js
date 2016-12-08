Ext.define('Melisa.chat.view.phone.chat.ContactsList', {
    extend: 'Ext.List',
    alias: 'widget.appchatcontactslist',
    
    loadingText: 'Obteniendo lista de contactos',
    emptyText: 'No hay contactos',
    deferEmptyText: true,
    striped: true,
    itemTpl: [
        '{name}'
    ]
});