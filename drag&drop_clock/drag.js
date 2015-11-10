(function() {
    var clock = document.getElementById("clock");

    function clockMove(e) {

        var coords = getCoords(clock);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;

            clock.style.position = 'absolute';
            moveAt(e);

            function moveAt(e) {
                clock.style.left = e.pageX - shiftX + 'px';
                clock.style.top = e.pageY - shiftY + 'px';
            }

            document.onmousemove = function (e) {
                moveAt(e);
            };

            clock.onmouseup = function () {
                document.onmousemove = null;
                clock.onmouseup = null;
            };
    }

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        }

    }

    clock.ondragstart = function () {
        return false;
    };

    clock.addEventListener('mousedown', clockMove)
}());
