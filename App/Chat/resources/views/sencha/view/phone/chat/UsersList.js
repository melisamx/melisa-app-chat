Ext.define('Melisa.chat.view.phone.chat.UsersList', {
    extend: 'Ext.List',
    alias: 'widget.appchatuserslist',
    
    loadingText: 'Obteniendo lista de usuarios',
    emptyText: 'No hay usuarios',
    deferEmptyText: true,
    striped: true,
    itemTpl: [
        '{name}'
    ]
});