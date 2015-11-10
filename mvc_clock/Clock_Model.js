function ClockModel() {

    return this;
}

ClockModel.prototype.getCurTimeOrDate = function(clockSwitch) {

    return this[clockSwitch]().map(this.correctFormat).join(':');
};

ClockModel.prototype.correctFormat = function(elem) {

    return (elem < 10) ? '0' + elem : elem;
};

ClockModel.prototype.formTimeArr = function() {

        var currentDate = new Date;

        return [currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()];
};

ClockModel.prototype.formDateArr = function() {

        var currentDate = new Date;

        return [currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()];
};