(function (app) {
    app.views.ProdInCartView = Backbone.View.extend({
        className: 'wrap-cart',
        template: app.templates.getTemplateByID('product-in-cart'),
        events:{
            'change [name="num-of-prod"]': 'recalculate'
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },
        recalculate: function () {

            Backbone.trigger('recalcTotals', this);
        }
    })
})(application);