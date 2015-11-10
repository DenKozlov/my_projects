(function (app) {
    app.routers.Router = Backbone.Router.extend({
        mainPageView: null,
        initialize: function () {
            this.listenTo(Backbone, 'get-url-path', this.getRouterPath)
                .listenTo(Backbone, 'return-to-main', this.index)
        },
        routes: {
            'main': 'index',
            'addpost': 'showAddPostForm',
            'post/:id': 'showFullPost'
            //'*defaults': 'defaultRoute'
        },
        index: function () {
            if(!this.mainPageView) {
                new application.views.MainView({
                    collection: new application.collections.PostCollection(),
                    el: 'body'
                });
                this.mainPageView = true;
            }
            else {
                this.navigate('main');
                Backbone.trigger('render-posts');
            }
        },
        getRouterPath: function (modelId) {
            var urlPath = 'post/' + modelId;

            this.navigate(urlPath, {trigger: true});
        },
        showAddPostForm: function () {
            Backbone.trigger('show-post-field');
        },
        showFullPost: function (id) {
            Backbone.trigger('full-post-view', id);
        },
        defaultRoute: function (defaults) {
            alert('You are trying to access page: "' + defaults + '", that doesn\'t exist!' )
        }
    })
})(application);