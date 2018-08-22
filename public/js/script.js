M.AutoInit();

/* ------------ Masonry init ------------ */

$(document).ready(function(){

    $('.grid').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
      });
});

/* ------------  Smooth scrolling ------------ */

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    var nav = $('nav').height();
    if(target.length) {
        event.preventDefault();


        var scroll = target.offset().top - nav;
        
        $('html, body').stop().animate({
            scrollTop: scroll
        }, 2000);
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
        }, 2000);
    }
}
});

/* ------------  Bouton flottant en small screen ------------  */

/* $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  }); */


/* ------------  Carousel ------------  */

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
    $('select').formSelect();
  });

$('.owl-carousel').owlCarousel(
    {
        loop:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:
        {
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


/* ------------  Changement sur scrolling ------------  */

    $(function()
    {
        var nav = $('nav');
        var navHeight = nav.height();
        var windowHeight = $(window).height();
        var presentation = $('#presentation');
        var coloredChars = $('.coloredChars');
        var navText = $('.navText');
        $(window).scroll(function()
        {
            var scroll = $(window).scrollTop();

            /* Application de la fonction sur écrans larges > 800 */
            if (screen.width > 800)
                {
                    if (scroll > windowHeight-navHeight)
                    {
                        nav.removeClass('nocolor').addClass('navChange');
                        presentation.addClass('hidden');
                        coloredChars.addClass('hidden');
                    }
                    else
                    {
                        if(scroll <= windowHeight-navHeight*2)
                        {
                        nav.removeClass('navChange').addClass('nocolor');
                        presentation.removeClass('hidden');
                        coloredChars.removeClass('hidden');

                        }
                    }

                    /* Si défilement sur dernière section */

                    if (scroll > windowHeight*3-navHeight*2)
                    {

                        nav.addClass('navChange2');
                        navText.addClass('color5');

                    }

                    else
                    {
                        if(scroll <= windowHeight*3-navHeight){
                            nav.removeClass('navChange2');
                            navText.removeClass('color5');
                        }
                    }
                    
                };


            
            /* Application de la fonction sur écrans < 800 */
            if (screen.width <= 800)
            {
                var bgPresentation = $('.bg_forest_sm');
                
                if (scroll > windowHeight-navHeight)
                {
                    nav.removeClass('nocolor').addClass('navChange');
                    presentation.addClass('hidden');
                    coloredChars.removeClass('color1').addClass('hidden');
                    bgPresentation.addClass('hidden');
                }
                else
                {
                    if(scroll <= windowHeight-navHeight)
                    {
                        nav.removeClass('navChange').addClass('nocolor');
                        presentation.removeClass('hidden');
                        coloredChars.removeClass('hidden').addClass('color1');
                        bgPresentation.removeClass('hidden');
                    }
                
                }
            }
        })
    });


    $(document).ready(function(){
        var all = $('.books, .video, .sport, .musique, .jeux');
        var books = $('.books');
        var video = $('.video');
        var sport = $('.sport');
        var music = $('.musique');
        var games = $('.jeux');

        $('#btn-books').click(function(){
            sport.addClass('opacity20');
            video.addClass('opacity20');
            games.addClass('opacity20');
            music.addClass('opacity20');
            books.removeClass('opacity20')

        });

        $('#btn-video').click(function(){
            sport.addClass('opacity20');
            books.addClass('opacity20');
            games.addClass('opacity20');
            music.addClass('opacity20');
            video.removeClass('opacity20')

        });

        $('#btn-sport').click(function(){
            books.addClass('opacity20');
            video.addClass('opacity20');
            games.addClass('opacity20');
            music.addClass('opacity20');
            sport.removeClass('opacity20')
        });

        $('#btn-music').click(function(){
            sport.addClass('opacity20');
            video.addClass('opacity20');
            games.addClass('opacity20');
            books.addClass('opacity20');
            music.removeClass('opacity20')

        });

        $('#btn-games').click(function(){
            sport.addClass('opacity20');
            video.addClass('opacity20');
            books.addClass('opacity20');
            music.addClass('opacity20');
            games.removeClass('opacity20')

        });


        $('#btn-all').click(function(){
            all.removeClass('opacity20');
        });

    });
