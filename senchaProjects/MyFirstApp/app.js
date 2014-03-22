Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	name: 'MyFirstApp',
	
	controllers: ['Main'],
	//models: ['Contact'],
    //loads app/store/Demos.js, which contains the tree data for our main navigation NestedList
    
    //views: ['BasicList'],

	launch: function() {
//        Ext.create('MyFirstApp.store.Speakers', { id: 'Speakers' });
//        MyFirstApp.util.Proxy.process('feed.js');	
		Ext.create('MyFirstApp.view.Viewport');
	}
});