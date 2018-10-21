M.AutoInit();

/* ------------ Masonry init ------------ */

$(document).ready(function(){

    $('.grid').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        gutter:0
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

/* $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    var nav = $('nav').height();
    if(screen.width <= 800){
    if(target.length) {
        event.preventDefault();


        var scroll = target.offset().top -nav;
        
        $('html, body').stop().animate({
            scrollTop: scroll
        }, 2000);
    }
}
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
        autoplayTimeout:9999996000,
        autoplayHoverPause:true,
        smartSpeed:700,
        responsive:
        {
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
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

            /* Application de la fonction sur écrans larges > 1200 */
            if (screen.width > 1200)
                {
                    if (scroll > windowHeight-navHeight-2)
                    {
                        nav.removeClass('nocolor').addClass('navChange');
                        presentation.addClass('hidden');
                        coloredChars.addClass('hidden');
                    }
                    else
                    {
                        if(scroll <= windowHeight-navHeight-2)
                        {
                            nav.removeClass('navChange').addClass('nocolor');
                            presentation.removeClass('hidden');
                            coloredChars.removeClass('hidden');
                        }
                    }

                    /* Si défilement sur section culture */

                    if (scroll > windowHeight*2-navHeight-2)
                    {
                        nav.addClass('navChange2');
                        navText.addClass('color6');
                    }

                    else
                    {
                        if(scroll <= windowHeight*3-navHeight-2)
                        {
                            nav.removeClass('navChange2');
                            navText.removeClass('color6');
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
                    bgPresentation.addClass('hidden');
                }
                else
                {
                    if(scroll <= windowHeight-navHeight)
                    {
                        nav.removeClass('navChange').addClass('nocolor');
                        presentation.removeClass('hidden');
                        bgPresentation.removeClass('hidden');
                    }
                
                }

                /* Si défilement sur dernière section */

                if (scroll > windowHeight*2-navHeight)
                {
                    nav.addClass('navChange2');
                    navText.addClass('color6');
                }

                else
                {
                    if(scroll <= windowHeight*3-navHeight*2)
                    {
                        nav.removeClass('navChange2');
                        navText.removeClass('color6');
                    }
                }
            }
        })
    });


    /* ------------ Mur d'images ------------ */

    $(document).ready(function(){
        var all = $('.books, .video, .sport, .musique, .jeux');
        var books = $('.books');
        var video = $('.video');
        var sport = $('.sport');
        var music = $('.musique');
        var games = $('.jeux');
        
        $('#btn-books').click(function()
        {
            all.addClass('opacity20').removeClass('opacity100');
            books.removeClass('opacity20').addClass('opacity100');
        });

        $('#btn-video').click(function()
        {
            all.addClass('opacity20').removeClass('opacity100');
            video.removeClass('opacity20').addClass('opacity100');
        });

        $('#btn-sport').click(function()
        {
            all.addClass('opacity20').removeClass('opacity100');
            sport.removeClass('opacity20').addClass('opacity100');
        });

        $('#btn-music').click(function()
        {
            all.addClass('opacity20').removeClass('opacity100');
            music.removeClass('opacity20').addClass('opacity100');
        });

        $('#btn-games').click(function()
        {
            all.addClass('opacity20').removeClass('opacity100');
            games.removeClass('opacity20').addClass('opacity100');
        });


        $('#btn-all').click(function()
        {
            all.addClass('opacity100');
        });

    });


    /* ------------ Gestion du modal ------------ */

    var modal = document.getElementById('modal');
    var btn = document.getElementById("button-modal");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() 
    {
        modal.style.display = "block";
    }
    span.onclick = function() 
    {
        modal.style.display = "none";
    }

    window.onclick = function(event) 
    {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }