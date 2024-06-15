$(document).ready(function() {
    var $defaultElement = $('.arti02').first();
    $defaultElement.removeClass('flex01').addClass('flex03');
    $defaultElement.find('div').addClass('active');
    $defaultElement.find('img').addClass('filter');

    $('.ani01').mouseenter(function() {
        $('.ani01').removeClass('flex03').addClass('flex01');
        $('.ani01').find('div').removeClass('active');
        $('.ani01').find('img').removeClass('filter');
        $(this).removeClass('flex01').addClass('flex03');
        $(this).find('div').addClass('active');
        $(this).find('img').addClass('filter');
    }).mouseleave(function() {
    });
    
});