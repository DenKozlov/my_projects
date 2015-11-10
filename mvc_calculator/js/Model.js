function CalcModel() {

}

CalcModel.prototype.addition = function(first, second) {

    return first + second;
};

CalcModel.prototype.subtraction = function(first, second) {

    return first - second;
};

CalcModel.prototype.multiplication = function(first, second) {

    return first * second;
};

CalcModel.prototype.division = function(first, second) {

    return first / second;
};

CalcModel.prototype.getResult = function (oper, first, second) {

    return this[oper](first,second);
};

