Ext.define('MyFirstApp.model.OrderItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'quantity', 'price', 'name']
    }
});
