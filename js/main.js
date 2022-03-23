$(document).ready(function () { 
    $("#slideshow-1").owlCarousel({
        center: true,
        loop: true,
        dots: false,
        nav : true,
        // autoplay: true,
        // autoplayTimeout : 3000,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav : false,
            },
            600: {
                items: 1,
                dots: true,
                nav : false,
            },
            1200: {
                items: 2,
            },
        },
    });
});




// Cảm nhận của khách hàng
$(document).ready(function () { 
    $("#slideshow-2").owlCarousel({
              center: true,
              loop: true,
              dots: true,
            //   autoplay: true,
            //   autoplayTimeout : 3000,
              responsive: {
                  0: {
                      items: 1,
                  },
                  900: {
                      items: 2,
                  },
                  1200: {
                      items: 3,
                  },
              },
      });
});

// Banner slideshow
$(document).ready(function () { 
    $("#banner").owlCarousel({
              center: true,
              loop: true,
              dots: false,
              nav: false,
            //   autoplay: true,
            //   autoplayTimeout : 3000,
              items: 1,
      });
});

// Phone menu
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $('#wapper-phone-menu').attr('style', 'width: 450px ');
    });
    $("#closePhoneMenu").click(function () {
        $('#wapper-phone-menu').attr('style', 'width: 0px ');
    });
});

// //Tab menu Navigation
// $(document).ready(function(){
//     // set defaut active for tab navigation first 
//     $('.tab_container:first').show();
//     $('.tab_navigation li:first div').addClass('active');

//     // set defaut active for tab navigation was clicked        
//     $('.tab_navigation li').click(function(event){
//         index  = $(this).index();
//         $('.tab_navigation li div').removeClass('active');
//         $(this).children('div').eq(0).addClass('active');
//         $('.tab_container').hide();
//         $('.tab_container').eq(index).show();
//     });
// });

//Tab menu Navigation
$(document).ready(function(){

    //reset icon 
    $('.tab_navigation li .icon .light').css('display','none');
    $('.tab_navigation li .icon .dark').css('display','inline-block');

    // set defaut active for tab navigation first 
    $('.tab_container:first').show();
    $('.tab_navigation li:first').addClass('active');
    $('.tab_navigation .item.active .light').css('display','inline-block');
    $('.tab_navigation .item.active .dark').css('display','none');

    // set defaut active for tab navigation was clicked        
    $('.tab_navigation li').click(function(event){
        index  = $(this).index();
        $('.tab_navigation li').removeClass('active');
        $(this).eq(0).addClass('active');
        $('.tab_container').hide();
        $('.tab_container').eq(index).show();
        
        //reset icon when click
        $('.tab_navigation li .icon .light').css('display','none');
        $('.tab_navigation li .icon .dark').css('display','inline-block');

        // active for navigation clicked
        $('.tab_navigation .item.active .light').css('display','inline-block');
        $('.tab_navigation .item.active .dark').css('display','none');
    });
});



// Back to top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#backTop').fadeIn();
        } else {
            $('#backTop').fadeOut();
        }
    });
});

$('#backTop').click(function (e) {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
})

