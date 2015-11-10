(function(app){
    app.models.Book = Backbone.Model.extend({
        validate: function (attrs) {
            var errorsArr = [];
            if(!attrs.author) {
                errorsArr.push(['author', 'Please, input the author ']);
            }
            if(!attrs.bookTitle) {
                errorsArr.push(['book-title', 'Please, input the book title']);
            }
            if(!attrs.publishHouse) {
                errorsArr.push(['publish-house', 'Please, input the name of publishing house']);
            }
            if(!attrs.publishDate) {
                errorsArr.push(['publish-date', 'Please, input publishing date']);
            }

            return errorsArr.length ? errorsArr: null;
        }
    })
})(application);
