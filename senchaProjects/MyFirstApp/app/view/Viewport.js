Ext.define('MyFirstApp.view.Viewport', {
	extend: 'Ext.TabPanel',
	
	config: {
			fullscreen: true,
			tabBarPosition: 'bottom',
			items: [
			        {
			        	xtype: 'homepanel'
			        },
			        {
			        	xtype: 'productspage'
			        },
			        {
			        	xtype: 'myblist'
			        },
			        {
			        	xtype: 'colChart'
			        }
			]
        }
});