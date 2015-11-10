function CalcController() {

    var calcModel = new CalcModel(),
        $input1 = $('#input1'),
        fromFirstToSec = false,
        oper,
        newNum,
        num2,
        num1;

    function clear() {
        $input1.val(0);
    }

    function addNumber(event) {

        newNum = $(event.target).html();

        if (newNum === "C") clear();

        else if ($input1.val() === '0' && isNaN(newNum))

            $input1.val($input1.val() + newNum);

        else if ($input1.val() === '0' || fromFirstToSec && !isNaN(newNum)) {

            $input1.val(newNum);
            fromFirstToSec = false
        }

        else $input1.val($input1.val() + newNum);
    }

    function inputOperation(event) {

    if ($(event.target).attr("id") === 'equals') {
        num2 = Number($input1.val());
        $input1.val(calcModel.getResult(oper, num1, num2));
        fromFirstToSec = true;
    }
        else
    {
        oper = $(event.target).attr("id");
        num1 = Number($input1.val());
        fromFirstToSec = true;
    }

    }

    function init() {

        var i = 0,
            str = [];

        for(; i < 10; i++) {
            str[i] ='<a class="button">'+i+'</a>'
        }

        str.push('<a class="button">'+'.'+'</a>'+'<a class="button">'+'C'+'</a>');

        $('#divWithButtons').append(str.join(''));

        $('#divWithButtons').click(addNumber);

        $('#inputAndOper').click(inputOperation);

    }

    return {init: init}
}
