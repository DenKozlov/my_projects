(function(app) {
	app.views.PostView = Backbone.View.extend({
		tagName: 'article',
		initialize: function() {
			//this.listenTo(Backbone, 'show-full-post', this.onOpen);
		},
		template: app.templates.getTemplateByID('article-template'),
		render: function() {
			var attrs = this.model.toJSON(),
				template = this.template(attrs);

			this.$el.html(template);
			return this;
		},
		events:{
            'click #edit-post': 'onEdit',
            'click #delete-post': 'onDelete',
			'click .delete-post-sm': 'onDelete',
			'click .blue': 'titleClicked'
        },
		titleClicked: function () {
			Backbone.trigger('get-url-path', this.model.id);
		},
        onDelete: function () {
            this.model.destroy();
            this.remove();
        },
		/*onOpen: function () {
			var fullPostView = new app.views.FullPostView({
				model: this.model
			});

			Backbone.trigger('full-post-view', fullPostView)
		},*/
        onEdit: function () {

        }
	});
})(application);