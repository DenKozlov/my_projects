(function (app) {
    app.collections.ProductsCollection = Backbone.Collection.extend({
        model: app.models.ProductModel
    });
})(application);