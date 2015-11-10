(function (app) {
    app.views.FullPostView = Backbone.View.extend({
        template: app.templates.getTemplateByID('show-full-post'),
        events: {
            'click a': 'close'
        },
        render: function () {

            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        close: function () {
            this.remove();
            Backbone.trigger('return-to-main');
        }
    })
})(application);