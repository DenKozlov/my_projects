$(function () {
    var library = new application.collections.Library(),
        addBookView = new application.views.AddBook({collection: library}),
        libraryView = new application.views.LibraryView({ collection: library });

        $('body').append(libraryView.render().el);
});
