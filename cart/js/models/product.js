(function (app) {
    app.models.ProductModel = Backbone.Model.extend({
        defaults: {
            quantity: 1
        }
    });
})(application);