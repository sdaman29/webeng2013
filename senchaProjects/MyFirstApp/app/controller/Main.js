Ext.define('MyFirstApp.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: ['MyFirstApp.view.ColorPatterns'],
    
    stores: ['List', 'OrderItems'],
    views: ['Home', 'Products', 'BasicList', 'ColumnChart'],

    init: function() {
     }
});