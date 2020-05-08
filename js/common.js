
var Common = {
	init: function() {;
        Common.menu();
        Common.main();
	},

    menu: function() {
        $('.btn__menu').on('click',function(e){
            e.preventDefault();
            if(!$(this).hasClass('active')) {
                $(this).addClass('active');
                $('.fixed').css({
                    'top': $('.header-top').outerHeight() + 'px',
                }).addClass('active');
                $('html, body').addClass('hid');
                
            }else {
                $(this).removeClass('active');
                $('.fixed').attr('style',' ').removeClass('active');
                $('html, body').removeClass('hid');
            }
        });
        
        
        $('.btn__close').on('click',function(e){
            e.preventDefault();
            $.fancybox.close();
        });
    },
    main: function() {
        $('.page__partner-slider').slick({
            infinite: 1,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                      centerPadding: '40px',
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                  }
                }
            ]
        });
        
        $('.page_news-js').slick({
            infinite: 1,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    dots: true,
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    dots: true,
                    slidesToShow: 1
                  }
                }
            ]
        });
        
        
        
        
        $('.page__sert-slider').slick({
            infinite: 1,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: 1,
            responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 500,
                  settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1
                  }
                },
                
            ]
        });
        
        $('.catalog__item-slider').each(function(){
            var next = $(this).next('.catalog__item-dots'),
            cont = '';
           
            $(this).children('div').each(function(i,item){
                
                cont += "<a href='' class='catalog__item-dots-a'><img src='images/colors/"+$(item).data('color')+".png'/></a>"; 
                
               
               
            });
            next.html(cont)
        })
        
//        $('.catalog__item-slider').on('init', function(event, slick){
//           
//        });
        
        
        $('.catalog__item-slider-js').slick({
            infinite: 0,
            slidesToShow: 1,
            slidesToScroll: 1,
            
            swipe: false,
            
            dots: false,
        });

        
        
        $('.catalog__item-sliderIn').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            
            swipe: true,
            
            dots: false,
        });
        
        $('body').on('click','.catalog__item-dots-a',function(e){
            e.preventDefault();
            $(this)
                .parents('.catalog__item')
                .find('.catalog__item-slider').slick('slickGoTo', $(this).index());
        })
        
        $('body').on('click','.item__imgMin-a',function(e){
            e.preventDefault();
            if(!$(this).hasClass('active')) {
                $('.item__imgMin-a').removeClass('active');
                $(this)
                    .addClass('active')
                    .parents('.item__img-slider')
                    .find('.catalog__item-slider').slick('slickGoTo', $(this).index());
            }
            
        });
        
        
        $('body').on('click','.dis-block-a',function(){
            if(!$(this).hasClass('active')) {
                $('.dis-block-a').removeClass('active');
                $(this).addClass('active');
                
                $('.dis__left.active > span').stop().animate({
                    top: $(this).position().top - $('.dis-block.active').position().top + 10 +  "px",
                }, 300,);
                $('.dis__left.active > .tab').removeClass('active');
                $('.dis__left.active > .tab').eq($(this).parent('.flex').index()).addClass('active');
            }
        });
        
        $('body').on('click','.more',function(e){
            e.preventDefault();
            $('.dis__left, .dis-block').toggleClass('active');
        });
        
        $('.item-info-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        });
        
        
            function getScrollTop() {

                var scrOfY = 0;
                if (typeof (window.pageYOffset) == "number") {
                    scrOfY = window.pageYOffset;
                } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                    scrOfY = document.body.scrollTop;
                } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                    scrOfY = document.documentElement.scrollTop;
                }
                return scrOfY;

            }
            fixPaneRefresh();
            $(window).scroll(function() {
                fixPaneRefresh();
            });


            function fixPaneRefresh() {
                let top = getScrollTop();
//
//                if (top > $('.header .header-top').outerHeight() ) {
//                   
//                    $('.header .fixed')
//                }else {
//                    $('.header .fixed').css({
//                        'margin-top': '0px'
//                    })
//                }
                
                if($(window).width() > 960) {
                    if (top > $('.header .header-top').outerHeight() ) {

                        $('.header .fixed').addClass('top')
                        $('.header-top').css({
                            'margin-bottom': $('.fixed').outerHeight() + 'px',
                        })
                    }else {
                        $('.header .fixed').removeClass('top')
                        $('.header-top').css({
                            'margin-bottom': '0px',
                        })
                    }
                }
            }    
        
        
        $('.page__catalog-sort-head').on('click',function(e){
            e.preventDefault();
            $(this).toggleClass('active');
        })
        
        
    },
    
    
};

$(function() {
	Common.init();
});