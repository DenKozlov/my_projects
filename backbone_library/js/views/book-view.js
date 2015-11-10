(function(app){
    app.views.Book = Backbone.View.extend({
        tagName: 'li',
        template: app.templates.bookTemplate('book-item'),
        initialize: function(){
            this.listenTo(this.model, 'change', this.render)
                .listenTo(this.model, 'invalid', function (model, error) {
                    alert(error[0][1]);
                });
        },
        events: {
            'click .edit': 'editBook',
            'click .delete': 'deleteBook'
        },
        editBook: function () {
            var newAuthor = prompt('Please enter new name', this.model.get('author'));

            this.model.set({author: newAuthor}, {validate: true});
        },
        deleteBook: function () {
            this.model.destroy();
            this.$el.remove();
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
    })
})(application);