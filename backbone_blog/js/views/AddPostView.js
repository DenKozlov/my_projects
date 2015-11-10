(function (app) {
    app.views.AddPost = Backbone.View.extend({
        tagName: 'fieldset',
        template: app.templates.getTemplateByID('add-post-template'),
        $message: $('#message'),
        events: {
            'focus input, textarea': 'onFocus',
            'blur input, textarea': 'onBlur',
            'click #add-post': 'onSave',
            'click #close, .btn-close': 'close'
        },
        onFocus: function (event) {
            var $target = $(event.target);

            $target.parent().attr('data-error', '');
        },
        onBlur: function (event) {
            var $target = $(event.target),
                value = $target.val(),
                id = $target.attr('id');

            if (value === '') {
                $target.parent().attr('data-error', 'Enter ' + id + '!');
            }
        },
        onSave: function () {
            var postContent = this.$('#content').val();

            this.model = new app.models.PostModel();
            this.listenTo(this.model, 'invalid', this.onInvalid);
            this.model.set({
                title: this.$('#title').val(),
                author: this.$('#author').val(),
                publishDate: this.getCurrDate(),
                content: postContent,
                descr: this.getPostDescr(postContent)
            }, {validate: true});
            this.$message.removeClass('alert-box success');
            this.collection.add(this.model);
            if (this.model.isValid()) {
                this.model.save({}, {
                    success: function () {
                        setTimeout(function () {
                            this.$message.addClass('alert-box success');
                        }, 1000);
                    }
                });
            }
        },
        getPostDescr: function (post) {

            return post.slice(0, 80) + '...';
        },
        close: function () {
            this.remove();
            Backbone.trigger('return-to-main');
        },
        getCurrDate: function () {
            var newDate = new Date(),
                monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                month = monthArray[newDate.getMonth()],
                date = newDate.getDate(),
                year = newDate.getFullYear();


            return [month, date, year].join(' ');
        },
        render: function () {

            this.$el.html(this.template());
            return this;
        },
        onInvalid: function (model, errorObject) {
            _.each(errorObject, function (value, key) {
                this.$('#' + key).parent().attr('data-error', value);
            }, this);
        }
    })
})(application);