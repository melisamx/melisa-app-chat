Ext.define('Melisa.chat.view.phone.chat.view.WrapperTitle', {
    extend: 'Ext.TitleBar',
    alias: 'widget.chatwrappertitle',
    
    docked: 'top',
    items: [
        {
            iconCls: 'x-fa fa fa-chevron-left',
            bind: {
                text: '{wrapper.title}'
            },
            listeners: {
                tap: 'activateMainModule'
            }
        }
    ]
});