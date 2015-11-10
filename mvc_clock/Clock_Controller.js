function ClockController() {

    var $clock = $("#clock"),
        clockSwitch = 'formTimeArr',
        clockModel = new ClockModel(),
        myInt;

    function switchDateTime(event) {
        clockSwitch = 'formTimeArr';
        if(event.which === 1 && clockSwitch === 'formTimeArr') {
            myInt = setInterval(drawDateAndTime, 1000);
        } else if(event.which === 3) {
            clearInterval(myInt);
            clockSwitch = 'formDateArr';
            drawDateAndTime();
        }
    }

    function preventContextMenu(event) {
        event.preventDefault();
    }

    function drawDateAndTime() {
        $clock.html(clockModel.getCurTimeOrDate(clockSwitch));
    }

    function init() {
        $clock.draggable();
        $clock.mousedown(switchDateTime);
        $clock.contextmenu(preventContextMenu)

    }

    return {init : init};
}