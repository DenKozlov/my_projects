(function(app) {
	app.collections.PostCollection = Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage('PostCollection'),
		model: app.models.PostModel
	});
})(application);