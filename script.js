$(document).ready(function () {
    var flag = false;

    $('.delivery__title').click(onclick, function () {
        if(flag == false){
            /*$('.delivery').removeClass('delivery_open');
            $(this).parent().parent().addClass('delivery_open');*/
            $(this).parent().parent().find('.delivery-body').fadeIn();
            $(this).parent().find('.icon-triangle').addClass('icon-red');
            $(this).parent().find('.icon-triangle').css('transform','rotate(0grad)');
            flag  = true;
        }
        else {
            $(this).parent().parent().find('.delivery-body').fadeOut();
            $(this).parent().find('.icon-triangle').css('transform','rotate(200grad)');
            $(this).parent().find('.icon-triangle').removeClass('icon-red');
            flag  = false;
        }
    });

    $('.hamburger').click(onclick, function () {
        if(flag == false){
            $(this).addClass('hamburger_open');
            $(this).parent().parent().addClass('tabs_open');
            flag  = true;
        }
        else {
            $(this).removeClass('hamburger_open');
            $(this).parent().parent().removeClass('tabs_open');
            flag  = false;
        }
    });

    $('.tab').click(onclick, function () {
       $('.hamburger').removeClass('hamburger_open');
       $('.tabs').removeClass('tabs_open');
       $('.tab').removeClass('tab_active');
       $(this).addClass('tab_active');

       var id = '#'+$(this).attr('data-tab');
       console.dir(id);
       $('.payment').fadeOut();
       $(id).fadeIn();
    });
});