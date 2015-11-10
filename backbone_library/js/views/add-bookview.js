(function(app){
    app.views.AddBook = Backbone.View.extend({
        el: '#addBook',
        events: {
            'click #add-book': 'addNewBook'
        },
        addNewBook: function() {
            var dataObj = {
                    author: this.$('#author').val(),
                    bookTitle: this.$('#book-title').val(),
                    publishHouse: this.$('#publish-house').val(),
                    publishDate: this.$('#publish-date').val()
                },
                newBook = new app.models.Book(dataObj);

            this.$('label').removeClass('error');
            if(newBook.isValid()) {
                this.collection.add(newBook);
            }
            else {
                newBook.validationError.forEach(function (elem) {
                        this.$('#' + elem[0]).parent().addClass('error').attr('error', elem[1]);
                }, this);
            }
        },
        idToModelAttr: function(inputId){
            var idToArray = inputId.split('-');

            return idToArray.reduce(function(prev, curr) {
                return prev + curr.charAt(0).toUpperCase() + curr.substr(1);
            });

        }
    })
})(application);