(function (app) {
    app.views.ProductView = Backbone.View.extend({
        className:'.product',
        cart: null,
        template: app.templates.getTemplateByID('product-template'),
        events: {
            'click .buy': 'addToCart'
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },
        addToCart: function () {
            Backbone.trigger('addProduct', this.model);
            $('#myModalonJS').modal({backdrop: 'static',
                keyboard: false});
        }
    });
})(application);