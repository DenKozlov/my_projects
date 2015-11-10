(function(app) {
	app.views.MainView = Backbone.View.extend({
		addPostView: null,
		fullPostView: null,
		initialize: function() {
			this.listenTo(this.collection, 'reset', this.onReset)
				.listenTo(Backbone, 'show-post-field', this.showPostField)
				.listenTo(Backbone, 'full-post-view', this.renderFullPost)
				.listenTo(Backbone, 'render-posts', this.onReset)
				.collection.fetch({reset: true});
		},
		renderFullPost: function (id) {
			var model = this.collection.get(id);

			this.fullPostView = new app.views.FullPostView({
				model: model
			});
			this.$('section ').html(this.fullPostView.render().el);
		},
		showPostField: function () {
			this.addPostView = new app.views.AddPost({
				collection: this.collection
		});
			this.$('section').html(this.addPostView.render().el);
		},
		onReset: function() {
			var fragment = document.createDocumentFragment();

			this.collection.each(function(model) {
				var view = new app.views.PostView({
					model: model
				}),
					postElem = view.render().el;
				fragment.appendChild(postElem);
			}, this);
			this.$('section').html(fragment);
		}
	});
})(application);