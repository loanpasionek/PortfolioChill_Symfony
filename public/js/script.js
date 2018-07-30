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


/* Meme fonction sur écrans < 800 */

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    var nav = $('nav').height();
    if(screen.width <= 800){
    if(target.length) {
        event.preventDefault();


        var scroll = target.offset().top;
        
        $('html, body').stop().animate({
            scrollTop: scroll
        }, 900);
    }
}
});

/* ------------  Bouton flottant en small screen ------------  */

/* $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  }); */




/* ------------  Nav changeant sur scrolling ------------  */

    $(function(){
        var containerNav = $('#containerNav');
        var nav = $('nav');
        var navHeight = nav.height();
        var windowHeight = $(window).height();
        var presentation = $('#presentation');
        var coloredChar1 = $('.coloredChars1');  /* Toutes les lettres orange sauf le "C" de Code */
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
                coloredChar1.removeClass('color1').addClass('hidden');
            }
            else{
                if(scroll <= windowHeight-navHeight*2){
                presentation.removeClass('hidden');
                coloredChar1.removeClass('hidden').addClass('color1');
                }
                
            }

            if(scroll > windowHeight-navHeight-200){

                coloredChar2.removeClass('color1').addClass('hidden');
            }

            else{
                if(scroll <= windowHeight-navHeight-200){
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
            var bgPresentation = $('.bg_forest_sm');
            
            if (scroll > windowHeight-navHeight){
                nav.removeClass('nocolor').addClass('navChange');
            }
            else{
                if(scroll <= windowHeight-navHeight){
                nav.removeClass('navChange').addClass('nocolor');
                }
                
            }

            if (scroll > windowHeight-navHeight){
                presentation.addClass('hidden');
                coloredChar1.removeClass('color1').addClass('hidden');
                bgPresentation.addClass('hidden');
            }
            else{
                if(scroll <= windowHeight-navHeight){
                presentation.removeClass('hidden');
                coloredChar1.removeClass('hidden').addClass('color1');
                bgPresentation.removeClass('hidden');
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
                containerNav.removeClass('nocolor').addClass('bgcolor3');
            }
            else{
                if(scroll < windowHeight){
                containerNav.removeClass('bgcolor3').addClass('nocolor');
                }
                
            }
        }

    })


    });