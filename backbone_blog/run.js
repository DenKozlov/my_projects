$(function() {
	var router = new application.routers.Router();
	Backbone.history.start();
	router.navigate('main', {trigger: true});
});