M.AutoInit();

/* ------------  Smooth scrolling ------------ */

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    var nav = $('nav').height();
    if(target.length) {
        event.preventDefault();


        var scroll = target.offset().top - nav;
        
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
        var navHeight = nav.height();
        var windowHeight = $(window).height();
        var presentation = $('#presentation');
        var coloredChar = $('.coloredChars1');
        var coloredChar2 = $('.coloredChars2');
        $(window).scroll(function()
    {
        var scroll = $(window).scrollTop();

        /* Application de la fonction sur écrans larges > 800 */
    if (screen.width > 800){
        if (scroll > windowHeight-navHeight){
            nav.removeClass('nocolor').addClass('navChange');
        }
        else{
            if(scroll <= windowHeight-navHeight){
            nav.removeClass('navChange').addClass('nocolor');
            }
            
        }

        if (scroll > windowHeight-navHeight*2){
            presentation.addClass('hidden');
            coloredChar.removeClass('color1').addClass('hidden');
        }
        else{
            if(scroll <= windowHeight-navHeight*2){
            presentation.removeClass('hidden');
            coloredChar.removeClass('hidden').addClass('color1');
            }
            
        }

        if(scroll > windowHeight-navHeight*3){

            coloredChar2.removeClass('color1').addClass('hidden');
        }

        else{
            if(scroll <= windowHeight-navHeight*3){
                coloredChar2.removeClass('hidden').addClass('color1');
            }
        }

        if (scroll > windowHeight*2){
            nav.removeClass('nocolor').addClass('bgcolor3');
        }
        else{
            if(scroll < windowHeight){
            nav.removeClass('bgcolor3').addClass('nocolor');
            }
            
        }
    }
        
    /* Application de la fonction sur écrans < 800 */
    if (screen.width <= 800){
        if (scroll > windowHeight-navHeight){
            nav.removeClass('nocolor').addClass('navChange');
        }
        else{
            if(scroll <= windowHeight-navHeight){
            nav.removeClass('navChange').addClass('nocolor');
            }
            
        }

        if (scroll > windowHeight-navHeight*2){
            presentation.addClass('hidden');
            coloredChar.removeClass('color1').addClass('hidden');
        }
        else{
            if(scroll <= windowHeight-navHeight*2){
            presentation.removeClass('hidden');
            coloredChar.removeClass('hidden').addClass('color1');
            }
            
        }

        if(scroll > windowHeight-navHeight*2+20){

            coloredChar2.removeClass('color1').addClass('hidden');
        }

        else{
            if(scroll <= windowHeight-navHeight*2+20){
                coloredChar2.removeClass('hidden').addClass('color1');
            }
        }

        if (scroll > windowHeight*2){
            nav.removeClass('nocolor').addClass('bgcolor3');
        }
        else{
            if(scroll < windowHeight){
            nav.removeClass('bgcolor3').addClass('nocolor');
            }
            
        }
    }

    })


    });