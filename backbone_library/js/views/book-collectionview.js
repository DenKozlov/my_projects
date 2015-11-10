(function(app){
    app.views.LibraryView = Backbone.View.extend({
        tagName: 'ul',
        initialize: function(){
            this.listenTo(this.collection, 'add', this.addOne);
        },
        render: function(){
            this.collection.each(this.addOne, this);

            return this;
        },
        addOne: function(book){
            var bookView = new app.views.Book({ model: book });

            this.$el.append(bookView.render().el);
        }
    })
})(application);