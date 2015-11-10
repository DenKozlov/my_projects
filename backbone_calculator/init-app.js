application = {
    models: {},
    collections: {},
    views: {},
    templates: {
        bookTemplate: function (id) {

            return _.template($('#' + id).html())
        }
    }
};