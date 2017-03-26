Ext.define('Melisa.chat.view.desktop.chat.view.SelectChat', {
    extend: 'Ext.container.Container',
    alias: 'widget.chatchatselectchat',
    
    layout: 'center',
    margin: '10',
    items: [
        {
            xtype: 'container',
            style: 'color: #919191; text-align: center; font-size: 20px',
            html: [
                '<i class="fa fa-comments-o" style="font-size: 80px" aria-hidden="true"></i>',
                '<h6 style="font-weight: normal">Seleccione un chat <br>ó<br>Busque un contacto para iniciar una conversación</h6>'
            ].join('')
        }
    ]
});
