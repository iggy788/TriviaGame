$(document).ready(function() {
    $('main').hide();
    $('results').hide();

    $('.btn-get-started').click(function start() {
        $('main').show();
        $('#welcome').hide();
    });

    $('.btn-outline-submit').click(function start() {
        $('results').show();
        $('main').hide();
    });
});