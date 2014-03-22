Ext.define('MyFirstApp.view.BasicList', {
    extend: 'Ext.Panel',
	xtype: 'myblist',
    requires: ['MyFirstApp.model.Contact'],
    config: {
    	title: 'BasicList',
    	iconCls: 'user',    	
        layout: Ext.os.deviceType == 'Phone' ? 'fit' : {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
    	cls: 'demo-list',
        items: [{
            width: Ext.os.deviceType == 'Phone' ? null : '50%',
            height: Ext.os.deviceType == 'Phone' ? null : '80%',
            xtype: 'list',
            store: 'List',
            itemTpl: '{firstName} {lastName}'
        }]
    }
});
