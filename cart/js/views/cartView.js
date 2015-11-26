(function (app) {
    app.views.CartView = Backbone.View.extend({
        id: 'myModalonJS',
        className: 'modal fade',
        placeOrderArr: [],
        template: app.templates.getTemplateByID('cart-template'),
        initialize: function () {
            this.listenTo(Backbone,'recalcTotals', this.recalTotPrices);
        },
        events: {
            'click .cancel, .close': 'cancelOrder',
            'click .place-order':'placeOrder'
        },
        render: function () {
            this.$el.html(this.template());
            this.collection.each(this.renderProdInCart, this);
            this.changeTotal();

            return this;
        },
        renderProdInCart: function (product) {
            var prodInCartView = new app.views.ProdInCartView({ model: product });

            this.placeOrderArr.push([product.cid, product.get('quantity')]);
            this.$el.find('.modal-body').prepend(prodInCartView.render().el);
        },
        cancelOrder: function () {
            this.collection.remove(this.collection.last());
            this.placeOrderArr = [];
            this.remove();
        },
        recalTotPrices: function (prodView) {
            var prodModel = prodView.model,
                $prodEl = prodView.$el,
                prodQuant = $prodEl.find('input').val();

            this.placeOrderArr.push([prodModel.cid, prodQuant]);
            $prodEl.find('span').text(prodQuant * prodModel.get('price'));
            this.changeTotal();
        },
        placeOrder: function () {
            this.collection.set(_.reduce(this.placeOrderArr,function (prev, curr) {
                prev.push(this.collection.get(curr[0]).set('quantity', curr[1]));

                return prev;
            }, [], this)
            );
            this.remove();
        },
        changeTotal: function () {
            var $spans= this.$el.find('[name=prod-price]'),
                sum = 0;

            $spans.each(function (i, elem) {

                sum += parseFloat(elem.innerText);

            });
            this.$el.find('#total').text(sum);
        }
    })
})(application);