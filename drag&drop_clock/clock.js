window.onload = function () {

    var clock = document.getElementById("clock"),
        clockSwitch = 'getCurTime',
        myInt;

    function GetTimeAndData() {

        this.getCurDate = function () {

            var currentDate = new Date(),
                years = currentDate.getFullYear(),
                months = currentDate.getMonth()+1,
                days = currentDate.getDate(),
                date = [years, months, days];

            date.forEach(correctFormat, date);

            return date.join(':');
        };

        this.getCurTime = function () {

            var currentTime = new Date(),
                hours = currentTime.getHours(),
                minutes = currentTime.getMinutes(),
                seconds = currentTime.getSeconds(),
                time = [hours, minutes, seconds];

            time.forEach(correctFormat, time);

            return time.join(':');
        };

        function correctFormat(elem, index) {
            this[index] = (elem < 10) ? '0' + elem : elem;
            return elem;
        }

    }

    function switchDateTime(event) {

        clockSwitch = 'getCurTime';
        if(event.which == 1 && clockSwitch === 'getCurTime') {
            myInt = setInterval(drawDateAndTime, 1000);
        } else if(event.which == 3) {
            clearInterval(myInt);
            clockSwitch = 'getCurDate';
            drawDateAndTime();
        }
    }

    function preventContextMenu(event) {
        event.preventDefault();
    }

    function drawDateAndTime() {
        clock.innerHTML = getTimeAndData[clockSwitch]();
    }

    var getTimeAndData = new GetTimeAndData();


    clock.addEventListener('mousedown', switchDateTime);
    clock.addEventListener('contextmenu', preventContextMenu)
};