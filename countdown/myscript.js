$(document).ready(function () {
    console.log("ready!");
    init();
    var clock = setInterval(countdown, 1000);
});

function init() {
    initContainer();
}

function initContainer() {
    $("body").append('<div id="le-countdown-container"></dic>');
    $("#le-countdown-container").css({
        display: 'inline-block',
        padding: '24px 24px',
        'box-shadow': '-7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001',
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        'border-radius': '5px',
        'z-index': 9999,
        background: 'black',
        color: '#FFF',
        opacity: 0.5
    });
}

function countdown() {
    var target = new Date();
    target.setHours(18, 0, 0);
    var m = target.getTime() - new Date().getTime();
    $("#le-countdown-container").html(Math.round(m / 1000 / 60 * 100) / 100);
}
