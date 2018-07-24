M.AutoInit();

/* ------------  Smooth scrolling ------------ */

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    var $nav = $('nav').height();
    if(target.length) {
        event.preventDefault();


        var scroll = target.offset().top - $nav;
        
        $('html, body').stop().animate({
            scrollTop: scroll
        }, 900);
    }
});


/* ------------  Bouton flottant en small screen ------------  */

/* $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  }); */



/* ------------  Parallax ------------  */



/* ------------  Nav changeant sur scrolling ------------  */

$(function(){

    var nav = $('nav');
    var $headerHeight = $("header").height();
    var $projectHeight = $("#sectionProjets").height() + $headerHeight;
    var aLiens = $('#nav-mobile a');

$(window).scroll(function()
    {
        var scroll = $(window).scrollTop();
        

        if(scroll > $headerHeight){
            nav.removeClass('nocolor').addClass('navChange');
            
        } else {
            if(scroll <= $headerHeight ){
                nav.removeClass('navChange').addClass('nocolor');
            }
        }

        if(scroll >  $projectHeight){
            nav.removeClass('navChange').addClass('navChange2');
            aLiens.each(function(){
                $(this).addClass('color4').removeClass('divider-color');
            });
        } else {
            if(scroll <=  $projectHeight ){
                nav.removeClass('navChange2');
                aLiens.each(function(){
                    $(this).addClass('divider-color').removeClass('color4');
                });
            }
        }
    });
    
    });
    