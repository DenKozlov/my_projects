(function(app){
    app.collections.Library = Backbone.Collection.extend({
        model: app.models.Book
    })
})(application);