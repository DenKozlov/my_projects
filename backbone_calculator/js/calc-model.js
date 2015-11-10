(function (app) {
    app.models.CalcModel = Backbone.Model.extend({
        addition: function() {

            return this.get('firstNum') + this.get('secNum');
        },
        subtraction: function(first, second) {

            return this.get('firstNum') - this.get('secNum');
        },
        multiplication: function(first, second) {

            return this.get('firstNum') * this.get('secNum');
        },
        division: function(first, second) {

            return this.get('firstNum') / this.get('secNum');
        },
        getResult: function (oper) {

            return this[oper]();
        }

    })
})(application);