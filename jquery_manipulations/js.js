$(function () {

    function DOMManipulations() {
    }

    DOMManipulations.prototype.toggleDiv = function (array) {
        array[0].toggle();
    };

    DOMManipulations.prototype.addSomeClass = function (array) {
        array[0].addClass(array[1]);
    };

    DOMManipulations.prototype.removeSomeClass = function (array) {
        array[0].removeClass(array[1]);
    };

    DOMManipulations.prototype.appendSomeElem = function (array) {
        array[0].append(array[2]);
    };

    DOMManipulations.prototype.prependSomeElem = function (array) {
        array[0].prepend(array[2]);
    };

    DOMManipulations.prototype.wrapWithDiv = function (array) {
        array[0].wrap('<div class = "wrapDiv"></div>');
    };

    DOMManipulations.prototype.getId = function (elem) {
        return elem.attr('id');
    };

    DOMManipulations.prototype.showElem = function (elem) {
        elem.show();
    };

    DOMManipulations.prototype.hideElem = function (elem) {
        elem.hide();
    };

    DOMManipulations.prototype.fromInputToDiv = function (array) {
        array[1].text(array[0].val());
    };

    DOMManipulations.prototype.fromSelectToDiv = function (array) {
        var $list = $('<ul></ul>');

        array[3].find(':selected').each(function(){
            $list.append('<li>' + $(this).val() + '</li>');
        });
        array[0].append($list);
    };

    var domManipulations = new DOMManipulations(),
        $container = $('#container'),
        $divWithButtons = $('#divWithButtons'),
        $hideAndShow = $('#hideAndShow'),
        $hoverButton = $('#hoverButton'),
        fromInputToDiv = $('#fromInputToDiv'),
        $textFromInput = $('#textFromInput'),
        $selText = $('#selText');

    $divWithButtons.on('click', function (event) {
        var $clickTarget = $(event.target),
            elemId = domManipulations.getId($clickTarget),
            selectedElem = $('#addElement option:selected').val(),
            selectedClass = $('#addClassSel option:selected').val();

        domManipulations[elemId]([$container, selectedClass, selectedElem, $selText]);
    });

    $hoverButton.hover(function () {
        domManipulations.showElem($hideAndShow);
    }, function () {
        domManipulations.hideElem($hideAndShow);
    });

    fromInputToDiv.on('change', function (event) {
        var $eventTarget = $(event.target),
            elemId = domManipulations.getId($eventTarget);

        domManipulations[elemId]([fromInputToDiv, $textFromInput]);
    });
});