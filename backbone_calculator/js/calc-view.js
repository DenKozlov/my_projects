(function (app) {
    app.views.CalcView = Backbone.View.extend({
        el: 'body',
        fromFirstToSec: false,
        events: {
            'click #inputAndOper': 'inputOperation',
            'click #divWithButtons': 'addNumber'
        },
        inputOperation: function (event) {
            var $input = this.$('input'),
                strToFloat = parseFloat($input.val());

            if (event.target.id === 'equals') {
                this.model.set('secNum', strToFloat);
                $input.val(this.model.getResult(this.oper));
            }
            else {
                if(!this.model.get('firstNum')) {
                    this.oper = event.target.id;
                    this.model.set('firstNum', strToFloat);
                }
            }
            this.fromFirstToSec = true;
        },
        addNumber: function (event) {
            var $input = this.$('input');

            this.newNum = event.target.innerText;
            if (this.newNum === "C") {
                this.clear();
            }
            else {
                if ($input.val() === '0' && isNaN(this.newNum)) {
                    $input.val($input.val() + this.newNum);
                }
                else {
                    if ($input.val() === '0' || this.fromFirstToSec && !isNaN(this.newNum)) {
                        $input.val(this.newNum);
                        this.fromFirstToSec = false;
                    }
                    else {
                        $input.val($input.val() + this.newNum);
                    }
                }
            }
        },
        clear: function () {
            this.$('input').val(0);
        }
    })
})(application);