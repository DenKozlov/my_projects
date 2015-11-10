(function(app) {
	app.models.PostModel = Backbone.Model.extend({
		defaults: {
			title: '',
			author: '',
			publishDate: '',
			descr:'',
			content: ''
		},
		validate: function (attrs) {
			var errorObject = {};

			_.each(attrs, function (attr, key) {
				if (!attr) {
					errorObject[key] = 'Please, enter post ' + key + '!';
				}
			});

			return !_.isEmpty(errorObject) ? errorObject : false;
		}
	});
})(application);