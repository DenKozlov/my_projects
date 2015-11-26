(function (app) {
    app.collections.Cart = Backbone.Collection.extend({
        model: app.models.ProductModel,
        initialize: function () {
            this.listenTo(Backbone,'addProduct', this.onAddGoods);
        },
        onAddGoods: function (model) {
            var cartView = new app.views.CartView({collection: this});

            this.add(model);
            Backbone.trigger('renderCart', cartView);

        }
    })
})(application);