// Setar aparecendo ao abrir
$('.titulo').addClass('anime-init');
$('.caracteristicas').addClass('anime-init');
$('.texto-inicial').addClass('anime-init');

$(window).scroll(function(){
    var windowTop = $(this).scrollTop();
    $('.anime-wait').each(function(){
        if(windowTop > $(this).offset().top - 500){
            $(this).addClass('anime-init');
        }else{
            $(this).removeClass('anime-init');
        }
    });
});