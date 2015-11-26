(function (app) {
    app.views.ProductsCollectionView = Backbone.View.extend({
        el: 'body',
        initialize: function () {
            this.listenTo(Backbone, 'renderCart', this.renderCart);
        },
        render: function(){
            this.collection.each(this.renderProduct, this);

            return this;
        },
        renderProduct: function(product){
            var productView = new app.views.ProductView({ model: product });

            this.$el.find('.row').append(productView.render().el);
        },
        renderCart: function (view) {
            this.$el.append(view.render().el).find('#myModalonJS').modal({backdrop: 'static',
                keyboard: true
            });

        }
    })
})(application);