// Load Screen
$(document).ready(function () {
    $(".lds-ellipsis").delay(100).fadeIn(100);
    $('#load_screen').delay(1200).fadeOut("fast");
    $("body").css('overflow', 'hidden');
    setTimeout(function () {
        $("body").css('overflow', 'auto');
    }, 1200);
});


// **Nav Menu Button Mobile Click**
// First Nav
$(document).ready(function() {
    $('.menubutton').click(function() {
        $(".nav_menu")
        .animate({ width: "21.04rem" }, 500 );
        $(".nav_menu_phone_side").fadeIn(500);
    });
});

$(document).ready(function() {
    $('.nav_menu_phone_side').click(function() {
        $(".nav_menu")
        .animate({ width: "0" }, 500 );
        $(".nav_menu_phone_side").fadeOut(500);
    });
});

// Second Nav
$(document).ready(function() {
    $('.menubutton3').click(function() {
        $(".nav_menu3")
        .animate({ width: "21.04rem" }, 500 );
        $(".nav_menu_phone_side3").fadeIn(500);
    });
});

$(document).ready(function() {
    $('.nav_menu_phone_side3').click(function() {
        $(".nav_menu3")
        .animate({ width: "0" }, 500 );
        $(".nav_menu_phone_side3").fadeOut(500);
    });
});


// **Nav Menu Button Mobile Overflow**
// First Nav
$(document).ready(function() {
    $(window).resize(function() {
        var docwidth = $(window).width()
        
        if (docwidth < 1251) {
            $('.menubutton').click(function() {
                $('html').addClass('html_no_overflow');
                $('body').addClass('body_no_overflow');
                $('html').addClass('html_no_overflow');
            });
            
            $('.nav_menu_phone_side').click(function() {
                $('html').removeClass('html_no_overflow');
                $('body').removeClass('body_no_overflow');
                $('main').removeClass('main_no_overflow');
            });

            if ($('.nav_menu_phone_side').css('display') === 'block') {
                // $(".nav_menu3").animate({ width: "0" }, 500 );
                // $(".nav_menu_phone_side3").fadeOut(500);
                $('html').addClass('html_no_overflow');
                $('body').addClass('body_no_overflow');
                $('main').addClass('main_no_overflow');
            }
        } else {
            if ($('.nav_menu_phone_side').css('display') === 'block') {
                // $(".nav_menu3").animate({ width: "0" }, 500 );
                // $(".nav_menu_phone_side3").fadeOut(500);
                $('html').removeClass('html_no_overflow');
                $('body').removeClass('body_no_overflow');
                $('main').removeClass('main_no_overflow');
            } else {
    
            }
        }
    });
    
    var docwidth = $(window).width()
    if (docwidth < 1251) {
        $('.menubutton').click(function() {
            $('html').addClass('html_no_overflow');
            $('body').addClass('body_no_overflow');
            $('main').addClass('main_no_overflow');
        });
        
        $('.nav_menu_phone_side').click(function() {
            $('html').removeClass('html_no_overflow');
            $('body').removeClass('body_no_overflow');
            $('main').removeClass('main_no_overflow');
        });

        if ($('.nav_menu_phone_side').css('display') === 'block') {
            // $(".nav_menu3").animate({ width: "0" }, 500 );
            // $(".nav_menu_phone_side3").fadeOut(500);
            $('html').addClass('html_no_overflow');
            $('body').addClass('body_no_overflow');
            $('main').addClass('main_no_overflow');
        }
    } else {
        if ($('.nav_menu_phone_side').css('display') === 'block') {
            // $(".nav_menu3").animate({ width: "0" }, 500 );
            // $(".nav_menu_phone_side3").fadeOut(500);
            $('html').removeClass('html_no_overflow');
            $('body').removeClass('body_no_overflow');
            $('main').removeClass('main_no_overflow');
        } else {

        }
    }
});

// Second Nav
$(document).ready(function() {
    $(window).resize(function() {
        var docwidth = $(window).width()
        
        if (docwidth < 1251) {
            $('.menubutton3').click(function() {
                $('html').addClass('html_no_overflow');
                $('body').addClass('body_no_overflow');
                $('main').addClass('main_no_overflow');
            });
            
            $('.nav_menu_phone_side3').click(function() {
                $('html').removeClass('html_no_overflow');
                $('body').removeClass('body_no_overflow');
                $('main').removeClass('main_no_overflow');
            });

            if ($('.nav_menu_phone_side3').css('display') === 'block') {
                // $(".nav_menu3").animate({ width: "0" }, 500 );
                // $(".nav_menu_phone_side3").fadeOut(500);
                $('html').addClass('html_no_overflow');
                $('body').addClass('body_no_overflow');
                $('main').addClass('main_no_overflow');
            }
        } else {
            if ($('.nav_menu_phone_side3').css('display') === 'block') {
                // $(".nav_menu3").animate({ width: "0" }, 500 );
                // $(".nav_menu_phone_side3").fadeOut(500);
                $('html').removeClass('html_no_overflow');
                $('body').removeClass('body_no_overflow');
                $('main').removeClass('main_no_overflow');
            } else {
    
            }
        }
    });
    
    var docwidth = $(window).width()
    if (docwidth < 1251) {
        $('.menubutton3').click(function() {
            $('html').addClass('html_no_overflow');
            $('body').addClass('body_no_overflow');
            $('main').addClass('main_no_overflow');
        });
        
        $('.nav_menu_phone_side3').click(function() {
            $('html').removeClass('html_no_overflow');
            $('body').removeClass('body_no_overflow');
            $('main').removeClass('main_no_overflow');
        });

        if ($('.nav_menu_phone_side3').css('display') === 'block') {
            // $(".nav_menu3").animate({ width: "0" }, 500 );
            // $(".nav_menu_phone_side3").fadeOut(500);
            $('html').addClass('html_no_overflow');
            $('body').addClass('body_no_overflow');
            $('main').addClass('main_no_overflow');
        }
    } else {
        if ($('.nav_menu_phone_side3').css('display') === 'block') {
            // $(".nav_menu3").animate({ width: "0" }, 500 );
            // $(".nav_menu_phone_side3").fadeOut(500);
            $('html').removeClass('html_no_overflow');
            $('body').removeClass('body_no_overflow');
            $('main').removeClass('main_no_overflow');
        } else {

        }
    }
});


// Nav Menu 1+2
$(document).ready(function() {
    $(window).resize(function() {
        var docwidth = $(window).width()
        
        if (docwidth < 1251) {
            $(".nav_menu").removeClass("nav_menu2");
        }
        else {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                $(".nav_menu").addClass("nav_menu2");
            } else {
                $(".nav_menu").removeClass("nav_menu2");
            }
        }
    });
    
    var docwidth = $(window).width()
    if (docwidth < 1251) {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            
            $(".nav_menu").removeClass("nav_menu2");
        });
    }
    else {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            
            if (scroll >= 100) {
                $(".nav_menu").addClass("nav_menu2");
            } else {
                $(".nav_menu").removeClass("nav_menu2");
            }
        });
    }
});


// Menu button 1+2
$(document).ready(function() {
    $(window).resize(function() {
        var docwidth = $(window).width()
        
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".menubutton").addClass("menubutton2");
        } else {
            $(".menubutton").removeClass("menubutton2");
        }
    });
    
    var docwidth = $(window).width()
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        
        if (scroll >= 100) {
            $(".menubutton").addClass("menubutton2");
        } else {
            $(".menubutton").removeClass("menubutton2");
        }
    });
});


// Back to top button
$(document).ready(function() {
    var BackTopClass = '.Back_To_Top_Button';
    var TopIconClass = BackTopClass + ' ' + 'i';

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            $(BackTopClass).fadeIn(200);
            $(TopIconClass).addClass('Back_To_Top_Rotation');
        } else {
            $(TopIconClass).removeClass('Back_To_Top_Rotation');
            $(BackTopClass).fadeOut(200);
        }
    });

    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $(BackTopClass).fadeIn(200);
        $(TopIconClass).addClass('Back_To_Top_Rotation');
    } else {
        $(TopIconClass).removeClass('Back_To_Top_Rotation');
        $(BackTopClass).fadeOut(200);
    }
});

$(document).ready(function() {
    var BackTopClass = '.Back_To_Top_Button';

    $(BackTopClass).click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    });
});


// Custom slider
$(document).ready(function() {
    var CSTitleSlider = '#cs_title_slider';

    $(CSTitleSlider).click(function() {
        $('.characters_symbols_wrapper').slideToggle('fast');
    });
});


// **Portfolio selection**
$(document).ready(function() {
    var DepNavLiClass = '.department_navigation ul li';

    $(DepNavLiClass).each(function() {
        var CurrentUrl = window.location.href;
        var PortfolioUrl = 'https://www.thomassinton.com/portfolio';
        var PortNewHash = $(this).find('a').attr('href').slice(9);
        var PortfolioNewAddr = 'https://www.thomassinton.com/portfolio' + 
        PortNewHash;

        if (CurrentUrl == PortfolioNewAddr) {
            $(this).addClass('departments');
            $(this).parent().parent().parent().find('li').not(this).removeClass('departments');
        }
    });

    $(DepNavLiClass).click(function() {
        $(this).addClass('departments');
        $(this).parent().parent().parent().find('li').not(this).removeClass('departments');
    });
});


// **Fade in Portfolio**
$(document).ready(function() {
    var PortForwardLinkClass = '.port_forward_link';

    $(PortForwardLinkClass).each(function() {
        var CurrentUrl = window.location.href;
        var PortfolioUrl = 'https://www.thomassinton.com/portfolio';
        var PortNewHash = $(this).attr('href').slice(9);
        var PortfolioNewAddr = 'https://www.thomassinton.com/portfolio' + 
        PortNewHash;

        if (CurrentUrl == PortfolioNewAddr) {
            // console.log('Page already has new URL');
            var DataWebLinkTitle = $(this).attr('data-web-link-title');
            $(document).attr('title',DataWebLinkTitle);

            var PortfolioNavLiDepTwo = $(this).parent();
            var DataPortfolioLoad = $(PortfolioNavLiDepTwo).attr('data-portfolio-load');

            if($(window).scrollTop() === 0) {
                $("#portfolio_section").load(DataPortfolioLoad, function() {

                    $(".p_load_screen_center").css('display','block');
                    $(".portfolio_loader_overlay").css('display','block');
                    $('.p_load_screen_center').delay(1000).fadeOut("fast");
                    $('.portfolio_loader_overlay').delay(1000).fadeOut("fast");

                    // $("body").css('overflow', 'hidden');
                    // setTimeout(function () {
                    //     $("body").css('overflow', 'auto');
                    // }, 1000);

                    var GetAllImageChoice = $('.portfolio_image_choice_container ul li a img');

                    $(GetAllImageChoice).each(function() {

                        if ($(this).attr('src') == '') {

                            var ImageListItem = $(this).parent().parent();

                            $(ImageListItem).remove();
                            
                        }
                    });

                    var PortfolioList = $('.portfolio_section').children('div').children('ul');

                    $(PortfolioList).each(function() {
                        if($(this).children().length > 0) {
                            
                        } else {
                            $(this).prev().find('h6').css('color','#AF0000');
                            $(this).remove();
                        }
                    });
                });
            }
            else {
                $('html, body').animate({ scrollTop: 0 }, 'fast');
                setTimeout(function(){
                    $("#portfolio_section").load(DataPortfolioLoad, function() {

                        $(".p_load_screen_center").css('display','block');
                        $(".portfolio_loader_overlay").css('display','block');
                        $('.p_load_screen_center').delay(1000).fadeOut("fast");
                        $('.portfolio_loader_overlay').delay(1000).fadeOut("fast");

                        // $("body").css('overflow', 'hidden');
                        // setTimeout(function () {
                        //     $("body").css('overflow', 'auto');
                        // }, 1000);

                        var GetAllImageChoice = $('.portfolio_image_choice_container ul li a img');

                        $(GetAllImageChoice).each(function() {

                            if ($(this).attr('src') == '') {
        
                                // Get all List Items of the images
                                var ImageListItem = $(this).parent().parent();
        
                                $(ImageListItem).remove();
                                
                            }
                        });

                        var PortfolioList = $('.portfolio_section').children('div').children('ul');

                        $(PortfolioList).each(function() {
                            if($(this).children().length > 0) {
                                
                            } else {
                                $(this).prev().find('h6').css('color','#AF0000');
                                $(this).remove();
                            }
                        });
                    });
                }, 200);
            }
        }
    });

    $(PortForwardLinkClass).click(function(e) {
        e.preventDefault();

        var DataWebLink = $(this).attr('data-web-link');
        var DataWebLinkTitle = $(this).attr('data-web-link-title');
        $(document).attr('title',DataWebLinkTitle);

        window.history.pushState('obj', DataWebLinkTitle, DataWebLink);
        // return false;

        // console.log('Pushing new page URL');

        var PortfolioNavLiDepTwo = $(this).parent();
        var DataPortfolioLoad = $(PortfolioNavLiDepTwo).attr('data-portfolio-load');

        if($(window).scrollTop() === 0) {
            $("#portfolio_section").load(DataPortfolioLoad, function() {

                $(".p_load_screen_center").css('display','block');
                $(".portfolio_loader_overlay").css('display','block');
                $('.p_load_screen_center').delay(1000).fadeOut("fast");
                $('.portfolio_loader_overlay').delay(1000).fadeOut("fast");

                // $("body").css('overflow', 'hidden');
                // setTimeout(function () {
                //     $("body").css('overflow', 'auto');
                // }, 1000);

                var GetAllImageChoice = $('.portfolio_image_choice_container ul li a img');

                $(GetAllImageChoice).each(function() {

                    if ($(this).attr('src') == '') {

                        var ImageListItem = $(this).parent().parent();

                        $(ImageListItem).remove();
                        
                    }
                });

                var PortfolioList = $('.portfolio_section').children('div').children('ul');

                $(PortfolioList).each(function() {
                    if($(this).children().length > 0) {
                        
                    } else {
                        $(this).prev().find('h6').css('color','#AF0000');
                        $(this).remove();
                    }
                });
            });
        }
        else {
            $('html, body').animate({ scrollTop: 0 }, 'fast');
            setTimeout(function(){
                $("#portfolio_section").load(DataPortfolioLoad, function() {

                    $(".p_load_screen_center").css('display','block');
                    $(".portfolio_loader_overlay").css('display','block');
                    $('.p_load_screen_center').delay(1000).fadeOut("fast");
                    $('.portfolio_loader_overlay').delay(1000).fadeOut("fast");

                    // $("body").css('overflow', 'hidden');
                    // setTimeout(function () {
                    //     $("body").css('overflow', 'auto');
                    // }, 1000);

                    var GetAllImageChoice = $('.portfolio_image_choice_container ul li a img');

                    $(GetAllImageChoice).each(function() {

                        if ($(this).attr('src') == '') {
    
                            // Get all List Items of the images
                            var ImageListItem = $(this).parent().parent();
    
                            $(ImageListItem).remove();
                            
                        }
                    });

                    var PortfolioList = $('.portfolio_section').children('div').children('ul');

                    $(PortfolioList).each(function() {
                        if($(this).children().length > 0) {
                            
                        } else {
                            $(this).prev().find('h6').css('color','#AF0000');
                            $(this).remove();
                        }
                    });
                });
            }, 200);
        }
    });
});

$(document).ready(function() {
    var classclick = $('#websites_department').find('a');

    $(classclick).each(function() {
        var CurrentUrl = window.location.href;
        var PortfolioUrl = 'https://www.thomassinton.com/portfolio';
        var PortNewHash = $(this).attr('href').slice(9);
        var PortfolioNewAddr = 'https://www.thomassinton.com/portfolio' + 
        PortNewHash;
    
        if (CurrentUrl == PortfolioNewAddr) {

            var DataWebLinkTitle = $(this).attr('data-web-link-title');
            $(document).attr('title',DataWebLinkTitle);
    
            if($(window).scrollTop() === 0) {
                $("#portfolio_section").load("websites.php", function() {
                    $(".p_load_screen_center").css('display','block');
                    $(".portfolio_loader_overlay").css('display','block');
                    $('.p_load_screen_center').delay(1000).fadeOut("fast");
                    $('.portfolio_loader_overlay').delay(1000).fadeOut("fast");
    
                    // $("body").css('overflow', 'hidden');
                    // setTimeout(function () {
                    //     $("body").css('overflow', 'auto');
                    // }, 1000);
                });
            } else {
                $('html, body').animate({ scrollTop: 0 }, 'fast');
                setTimeout(function(){
                    $("#portfolio_section").load("websites.php", function() {
                        $(".p_load_screen_center").css('display','block');
                        $(".portfolio_loader_overlay").css('display','block');
                        $('.p_load_screen_center').delay(1000).fadeOut("fast");
                        $('.portfolio_loader_overlay').delay(1000).fadeOut("fast");
    
                        // $("body").css('overflow', 'hidden');
                        // setTimeout(function () {
                        //     $("body").css('overflow', 'auto');
                        // }, 1000);
                    })
                }, 200);
            }
    
        } else if (CurrentUrl == PortfolioUrl) {

            var DataWebLinkTitle = $(this).attr('data-web-link-title');
            $(document).attr('title',DataWebLinkTitle);
    
            if($(window).scrollTop() === 0) {
                $("#portfolio_section").load("websites.php", function() {
                    $(".p_load_screen_center").css('display','block');
                    $(".portfolio_loader_overlay").css('display','block');
                    $('.p_load_screen_center').delay(1000).fadeOut("fast");
                    $('.portfolio_loader_overlay').delay(1000).fadeOut("fast");
    
                    // $("body").css('overflow', 'hidden');
                    // setTimeout(function () {
                    //     $("body").css('overflow', 'auto');
                    // }, 1000);
                });
            } else {
                $('html, body').animate({ scrollTop: 0 }, 'fast');
                setTimeout(function(){
                    $("#portfolio_section").load("websites.php", function() {
                        $(".p_load_screen_center").css('display','block');
                        $(".portfolio_loader_overlay").css('display','block');
                        $('.p_load_screen_center').delay(1000).fadeOut("fast");
                        $('.portfolio_loader_overlay').delay(1000).fadeOut("fast");
    
                        // $("body").css('overflow', 'hidden');
                        // setTimeout(function () {
                        //     $("body").css('overflow', 'auto');
                        // }, 1000);
                    })
                }, 200);
            }
        }
    });

    $(classclick).click(function(e) {
        e.preventDefault();

        var DataWebLink = $(this).attr('data-web-link');
        var DataWebLinkTitle = $(this).attr('data-web-link-title');
        $(document).attr('title',DataWebLinkTitle);

        window.history.pushState('obj', DataWebLinkTitle, DataWebLink);
        // return false;

        // console.log('Pushing new page URL');

        if($(window).scrollTop() === 0) {
            $("#portfolio_section").load("websites.php", function() {
                $(".p_load_screen_center").css('display','block');
                $(".portfolio_loader_overlay").css('display','block');
                $('.p_load_screen_center').delay(1000).fadeOut("fast");
                $('.portfolio_loader_overlay').delay(1000).fadeOut("fast");

                // $("body").css('overflow', 'hidden');
                // setTimeout(function () {
                //     $("body").css('overflow', 'auto');
                // }, 1000);
            });
        }
        else {
            $('html, body').animate({ scrollTop: 0 }, 'fast');
            setTimeout(function(){
                $("#portfolio_section").load("websites.php", function() {
                    $(".p_load_screen_center").css('display','block');
                    $(".portfolio_loader_overlay").css('display','block');
                    $('.p_load_screen_center').delay(1000).fadeOut("fast");
                    $('.portfolio_loader_overlay').delay(1000).fadeOut("fast");

                    // $("body").css('overflow', 'hidden');
                    // setTimeout(function () {
                    //     $("body").css('overflow', 'auto');
                    // }, 1000);
                })
            }, 200);
        }
    });
});


// Portfolio Clickable Image??
$(document).ready(function() {
    $(".clickable_image_fullscreen").on('click', function() {
        $(this).toggleClass("image_clicked_fullscreen");
        $("body").toggleClass("body_no_overflow");
    });
});


// Homepage Blog Arrow
$(document).ready(function() {
    $(".homepage_arrow_down_2").click(function() {
        $('html, body').animate({
            scrollTop: $("#blog_section").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        
        if (scroll <= 500) {
            $("#homepage_arrow_down").css('opacity','1');
        }
        else {
            $("#homepage_arrow_down").css('opacity','0');
        }
    });
});


// Video thing
$(document).ready(function() {
    $(window).resize(function() {
        var docwidth = $(window).width()
        
        if (docwidth < 1251) {
            $("video").attr("controls",true);
        }
        else {
            $("video").removeAttr("controls");
        }
    });
    
    var docwidth = $(window).width()
    if (docwidth < 1251) {
        $("video").attr("controls",true);
    }
    else {
        $("video").removeAttr("controls");
    }
});

$(document).ready(function() {
    $(window).resize(function() {
        var docwidth = $(window).width()
        
        if (docwidth < 1251) {
            $("video").attr("playsinline",true);
        }
        else {
            $("video").removeAttr("playsinline");
        }
    });
    
    var docwidth = $(window).width()
    if (docwidth < 1251) {
        $("video").attr("playsinline",true);
    }
    else {
        $("video").removeAttr("playsinline");
    }
});






// Services
$(document).ready(function() {
    $("[data-cat-choice]").on("click", function(e) {

        // Get image div data
        var targeted_popup_attr = $(this).attr('data-cat-choice');

        // Get target class
        var target_class = $(this).attr('class').split(' ')[1];
        
        // Get target class number
        var targeted_class_number = target_class.slice(7);

        // Get target class option
        var targeted_text_category = ('.text_option_' + targeted_class_number);

        // Get image div data number
        var targeted_popup_attr_number = targeted_popup_attr.slice(15);

        // Get video div data
        var targeted_pop_category = ('#service_' + targeted_popup_attr_number);

        // Show Data
        $( targeted_pop_category ).delay('200').fadeToggle( "fast" );

        // Get target icon
        var target_i = $(this).find('i');

        // Toggle class on icon
        $( target_i ).toggleClass('rotation_icon');

        // Remove all other icons classes
        $(this).parent().find('i').not(target_i).removeClass( "rotation_icon" );

        // Fadeout all other uls
        $(targeted_pop_category).parent().find('ul').not(targeted_pop_category).fadeOut( "fast" );

        // Adds colour to current toggled option
        $(this).toggleClass('service_option_current');

        $(this).parent().find('.service_option_container').not(this).removeClass( "service_option_current" );

        // Paragraph visibility
        if($(this).find('i').hasClass('rotation_icon')) {
            $(this).parent().parent().parent().find('p').fadeOut('fast');
        } else {
            $(this).parent().parent().parent().find('p').delay('375').fadeIn("fast");
        }
    });
});


// $(document).ready(function() {
//     $("[data-cat-choice]").on("click", function(e) {

//         // Get image div data
//         var targeted_popup_attr = $(this).attr('data-cat-choice');

//         // Get target class
//         var target_class = $(this).attr('class').split(' ')[1];
        
//         // Get target class number
//         var targeted_class_number = target_class.slice(7);

//         // Get target class option
//         var targeted_text_category = ('.text_option_' + targeted_class_number);

//         // Get image div data number
//         var targeted_popup_attr_number = targeted_popup_attr.slice(15);

//         // Get video div data
//         var targeted_pop_category = ('#service_' + targeted_popup_attr_number);

//         // Show Data
//         $( targeted_pop_category ).delay('200').fadeToggle( "fast" );

//         // Get target icon
//         var target_i = $(this).find('i');

//         // Toggle class on icon
//         $( target_i ).toggleClass('rotation_icon');

//         // Remove all other icons classes
//         $(this).parent().find('i').not(target_i).removeClass( "rotation_icon" );

//         // Fadeout all other uls
//         $(targeted_pop_category).parent().find('ul').not(targeted_pop_category).fadeOut( "fast" );

//         // Adds colour to current toggled option
//         $(this).toggleClass('service_option_current');

//         $(this).parent().find('.service_option_container').not(this).removeClass( "service_option_current" );

// if($('.service_text_container').find('i').hasClass('rotation_icon')) {
        //     $(this).parent().parent().parent().find('p').fadeOut('fast');
        // } else {
        //     $(this).parent().parent().parent().find('p').delay('375').fadeIn("fast");
        // }

        // if($(target_i).hasClass('rotation_icon')) {
        //     $(targeted_text_category).fadeOut('fast');
        // } else {
        //     setTimeout(function() {
        //         $(targeted_text_category).fadeIn("fast");
        //     }, 375);
        // }


//         // Paragraph visibility
//         if($(target_i).hasClass('rotation_icon')) {
//             $(targeted_text_category).fadeOut('fast');
//         } else {
//             setTimeout(function(){
//                 $(targeted_text_category).fadeIn("fast");
//             }, 375);
//         }
//     });
// });


// Portfolio Navigation Section Moved
// $(document).ready(function() {
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//         var WindowHeight = $(window).height();
//         var NowPer = 7/100;
//         var Percentage = WindowHeight * NowPer;

//         // console.log(Percentage);
        
//         if (scroll >= Percentage) {
//             $(".portfolio_navigation_section").addClass("portfolio_navigation_section_moved");
//         } else {
//             $(".portfolio_navigation_section").removeClass("portfolio_navigation_section_moved");
//         }
//     });
// });


// Portfolio Navigation Section Moved
$(document).ready(function() {
    $(window).resize(function() {
        var docwidth = $(window).width()
        
        if (docwidth < 1251 && docwidth > 750) {
            var scroll = $(window).scrollTop();
            var WindowHeight = $(window).height();
            var MarginTopPN = '18';
            
            if (scroll >= MarginTopPN) {
                $(".portfolio_navigation_section").addClass("portfolio_navigation_section_moved");
            } else {
                $(".portfolio_navigation_section").removeClass("portfolio_navigation_section_moved");
            }
        }

        else if (docwidth < 751) {
            var scroll = $(window).scrollTop();
            var WindowHeight = $(window).height();
            var MarginTopPNP = '46';
            
            if (scroll >= MarginTopPNP) {
                $(".portfolio_navigation_section").addClass("portfolio_navigation_section_moved");
            } else {
                $(".portfolio_navigation_section").removeClass("portfolio_navigation_section_moved");
            }
        }

        else {
            var scroll = $(window).scrollTop();
            var WindowHeight = $(window).height();
            var NowPer = 7/100;
            var Percentage = WindowHeight * NowPer;
    
            // console.log(Percentage);
            
            if (scroll >= Percentage) {
                $(".portfolio_navigation_section").addClass("portfolio_navigation_section_moved");
            } else {
                $(".portfolio_navigation_section").removeClass("portfolio_navigation_section_moved");
            }
        }
    });
    
    var docwidth = $(window).width()
    if (docwidth < 1251 && docwidth > 750) {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var WindowHeight = $(window).height();
            var MarginTopPN = '18';
            
            if (scroll >= MarginTopPN) {
                $(".portfolio_navigation_section").addClass("portfolio_navigation_section_moved");
            } else {
                $(".portfolio_navigation_section").removeClass("portfolio_navigation_section_moved");
            }
        });
    }

    else if (docwidth < 751) {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var WindowHeight = $(window).height();
            var MarginTopPNP = '46';
            
            if (scroll >= MarginTopPNP) {
                $(".portfolio_navigation_section").addClass("portfolio_navigation_section_moved");
            } else {
                $(".portfolio_navigation_section").removeClass("portfolio_navigation_section_moved");
            }
        });
    }

    else {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var WindowHeight = $(window).height();
            var NowPer = 7/100;
            var Percentage = WindowHeight * NowPer;
    
            // console.log(Percentage);
            
            if (scroll >= Percentage) {
                $(".portfolio_navigation_section").addClass("portfolio_navigation_section_moved");
            } else {
                $(".portfolio_navigation_section").removeClass("portfolio_navigation_section_moved");
            }
        });
    }
});

// Alerts Closer
$(document).ready(function() {
    $('.alert_closer').click(function() {

        var AlertIcon = $(this).children('i');

        var AlertContainer = $(this).parent();

        $(AlertIcon).addClass('alertcloser');

        $(AlertContainer).delay(200).fadeOut(200);

        setTimeout(function () {
            $(AlertIcon).removeClass('alertcloser');
        }, 400);
    });
});


// Alert Container Width
// $(document).ready(function() {
//     // $('.alert_container').each(function() { // TODO: CORRECT THIS FOR SCREEN WIDTH CHANGES

//     //     var p = $(this).find('p');

//     //     var PWidth = $(p).css('width').replace(/[^-\d\.]/g, '');
//     //     var PPaddingLeft = $(p).css('padding-left').replace(/[^-\d\.]/g, '');
//     //     var PPaddingRight = $(p).css('padding-right').replace(/[^-\d\.]/g, '');

//     //     // var PWidthNumber = $(PWidth).split('px');


//     //     var AlertWidth = parseInt(PWidth) + parseInt(PPaddingLeft) + parseInt(PPaddingRight);

//     //     console.log(AlertWidth);

//     //     console.log($('.alert_container').css('width',AlertWidth));
//     // });

//     $(window).on('resize', function() {

//         // window
//         // var win = $(this);
//         var WindowWidth = $(window).width();

//         var wincon = 'window width' + ' ' + WindowWidth;

//         console.log(wincon);

//         $('.alert_container').each(function() {

//             var p = $(this).find('p');
    
//             var PWidth = $(p).css('width').replace(/[^-\d\.]/g, '');
//             var PPaddingLeft = $(p).css('padding-left').replace(/[^-\d\.]/g, '');
//             var PPaddingRight = $(p).css('padding-right').replace(/[^-\d\.]/g, '');

//             console.log(PWidth);
//             console.log(PPaddingLeft);
//             console.log(PPaddingRight);
    
//             var AlertWidth = parseInt(PWidth) + parseInt(PPaddingLeft) + parseInt(PPaddingRight);

//             var alwidcon = 'Alert Width' + ' ' + AlertWidth;
    
//             console.log(alwidcon);
    
//             // console.log($('.alert_container').css('width',AlertWidth));
//             $('.alert_container').css('width',AlertWidth)
//         });
//     })
// });















// REDONE jQUERY!


// **Blog Post Opener**
// $(document).ready(function() {
//     $(".post_container_opener").on("click", function(e) {
//         $(this).parent().parent().parent().toggleClass('post_wrapper_open');
//         $("body").toggleClass('body_no_overflow');

//         var ImageContainer = $(this).parent().parent().children('.post_image_container');

//         var ImageItself = $(this).parent().parent().children('.post_image_container').children('img');

//         if($(ImageItself).length > 0) {
//             ImageContainer.toggleClass('post_image_container_large');
//         } else {

//         }

//         if($(this).parent().parent().parent().hasClass('post_wrapper_open')) {
//             $(this).find('i').attr('class','fas fa-compress-arrows-alt fa-fw');
//         } else {
//             $(this).find('i').attr('class','fas fa-expand-arrows-alt fa-fw');
//         }
//     });
// });
$(function() {
    $('.blog_section').on('click', '.post_container_opener', function(e) {
        // e.preventDefault();
        // console.log(this);
        $(this).parent().parent().parent().toggleClass('post_wrapper_open');
        $("body").toggleClass('body_no_overflow');

        var ImageContainer = $(this).parent().parent().children('.post_image_container');

        var ImageItself = $(this).parent().parent().children('.post_image_container').children('img');

        if($(ImageItself).length > 0) {
            ImageContainer.toggleClass('post_image_container_large');
        } else {

        }

        if($(this).parent().parent().parent().hasClass('post_wrapper_open')) {
            $(this).find('i').attr('class','fas fa-times fa-fw');
        } else {
            $(this).find('i').attr('class','fas fa-plus fa-fw');
        }
    });

    // $('.blog_section').on('mouseenter', '.post_container_opener', function(e) {

    //     if($(this).parent().parent().parent().hasClass('post_wrapper_open')) {
    //         $(this).find('i').attr('class','fas fa-times-circle');
    //     } else {
    //         $(this).find('i').attr('class','fas fa-circle');
    //     }
    
    // }).on('mouseleave', '.post_container_opener', function(e) {

    //     if($(this).parent().parent().parent().hasClass('post_wrapper_open')) {
    //         $(this).find('i').attr('class','fas fa-times');
    //     } else {
    //         $(this).find('i').attr('class','fas fa-plus');
    //     }
    // });
});


// **Portfolio Image Removal without src** -> NOT Done with AJAX
$(document).ready(function() {

    // Get All Portfolio Images
    var GetAllImageChoice = $('.portfolio_image_choice_container ul li a img');

    $(GetAllImageChoice).each(function() {

        if ($(this).attr('src') ==  '') {

            // Get all List Items of the images
            var ImageListItem = $(this).parent().parent();

            $(ImageListItem).remove();
            // $(ImageListItem).css('display','none');
            
        }
    });

    $('.department_navigation ul li a').click(function() {
        $(GetAllImageChoice).each(function() {

            if ($(this).attr('src') ==  '') {
    
                // Get all List Items of the images
                var ImageListItem = $(this).parent().parent();
    
                $(ImageListItem).remove();
                // $(ImageListItem).css('display','none');
                
            }
        });
    });
});
// $(function() {
//     $('.portfolio_navigation_section').on('click', '.department_navigation ul li a', function(e) {

//         // Get All Portfolio Images
//         var GetAllImageChoice = $('.portfolio_image_choice_container ul li a img');

//         $(GetAllImageChoice).each(function() {

//             if ($(this).attr('src') ==  '') {
    
//                 // Get all List Items of the images
//                 var ImageListItem = $(this).parent().parent();
    
//                 $(ImageListItem).remove();
//                 // $(ImageListItem).css('display','none');
                
//             }
//         });
//     });

//     $('.portfolio_wrapper').on('mouseenter', '.portfolio_section', function(e) {
//         var GetAllImageChoice = $('.portfolio_image_choice_container ul li a img');

//         if ($(GetAllImageChoice).attr('src') ==  '') {
    
//             // Get all List Items of the images
//             var ImageListItem = $(GetAllImageChoice).parent().parent();

//             $(ImageListItem).remove();
//             // $(ImageListItem).css('display','none');
            
//         }
//     });
// });
$(function() {
    var DepartmentNavigationSelection = '.department_navigation ul li a';

    $('.portfolio_navigation_section').on('click', DepartmentNavigationSelection, function(e) {

        if ($('img').attr('src') ==  '') {

            // Get all List Items of the images
            var ImageListItem = $(this).parent().parent();

            $(ImageListItem).remove();
            // $(ImageListItem).css('display','none');
            
        }
    });

    $('.portfolio_wrapper').on('mouseenter', '.portfolio_section', function(e) {

        if ($('img').attr('src') ==  '') {
            // console.log(this);
    
            // Get all List Items of the images
            var ImageListItem = $(GetAllImageChoice).parent().parent();

            $(ImageListItem).remove();
            // $(ImageListItem).css('display','none');
            
        }
    });
});




// **First child image set main image Portfolio**
$(document).ready(function() {

    // Get the first child image
    var FirstImg = $('.portfolio_image_choice_container ul li:first-child a img');

    $(FirstImg).each(function() {

        // Set Current Nav on Portfolio Image
        $(FirstImg).parent().addClass('current_portfolio_image');

        // Get the src of first image
        var FirstImgSrc = $(this).attr('src');

        // Get the alt of first image
        var FirstImgAlt = $(this).attr('alt');

        // Get the main image target
        var MainImg = $(this).parent().parent().parent().parent().parent().find('.portfolio_image_container').children('img');
        
        // Put in the new attr src and alt
        $(MainImg).attr('src', FirstImgSrc);
        $(MainImg).attr('alt', FirstImgAlt);
    });

    $('.department_navigation ul li a').click(function() {

        $(FirstImg).each(function() {

            // Set Current Nav on Portfolio Image
            $(FirstImg).parent().addClass('current_portfolio_image');
    
            // Get the src of first image
            var FirstImgSrc = $(this).attr('src');
    
            // Get the alt of first image
            var FirstImgAlt = $(this).attr('alt');
    
            // Get the main image target
            var MainImg = $(this).parent().parent().parent().parent().parent().find('.portfolio_image_container').children('img');
            
            // Put in the new attr src and alt
            $(MainImg).attr('src', FirstImgSrc);
            $(MainImg).attr('alt', FirstImgAlt);
        });
    });
});
$(function() {
    var departmentnav = ".department_navigation ul li a";
    $('.portfolio_section').on('click', departmentnav, function(e) {
        // Get the first child image
        var FirstImg = $('.portfolio_image_choice_container ul li:first-child a img');

        $(FirstImg).each(function() {

            // Set Current Nav on Portfolio Image
            $(FirstImg).parent().addClass('current_portfolio_image');
    
            // Get the src of first image
            var FirstImgSrc = $(this).attr('src');
    
            // Get the alt of first image
            var FirstImgAlt = $(this).attr('alt');
    
            // Get the main image target
            var MainImg = $(this).parent().parent().parent().parent().parent().find('.portfolio_image_container').children('img');
            
            // Put in the new attr src and alt
            $(MainImg).attr('src', FirstImgSrc);
            $(MainImg).attr('alt', FirstImgAlt);
        });
    });
});





// **Portfolio Container Opener**
// $(document).ready(function() {

//     var PortfolioContainerOpener = '.portfolio_container_opener';

//     var PortfolioContainerWrapperOpen = 'portfolio_container_wrapper_open';

//     $(PortfolioContainerOpener).on("click", function(e) {

//         var PortfolioContainerWrapper = $(this).parent().parent().parent().parent();

//         $(PortfolioContainerWrapper).toggleClass(PortfolioContainerWrapperOpen);
//         $("body").toggleClass('body_no_overflow');

//         // var ImageContainer = $(this).parent().parent().children('.post_image_container');

//         // var ImageItself = $(this).parent().parent().children('.post_image_container').children('img');

//         // if($(ImageItself).length > 0) {
//         //     ImageContainer.toggleClass('post_image_container_large');
//         // } else {

//         // }

//         if($(PortfolioContainerWrapper).hasClass(PortfolioContainerWrapperOpen)) {
//             $(this).find('i').attr('class','fas fa-compress-arrows-alt fa-fw');
//         } else {
//             $(this).find('i').attr('class','fas fa-expand-arrows-alt fa-fw');
//         }
//     });
// });
// $(function() {

//     var PortfolioContainerOpener = '.portfolio_container_opener';

//     var PortfolioContainerWrapperOpen = 'portfolio_container_wrapper_open';

//     $('.portfolio_section').on('click', PortfolioContainerOpener, function(e) {

//     // $(PortfolioContainerOpener).on("click", function(e) {

//         var PortfolioContainerWrapper = $(this).parent().parent().parent().parent();

//         $(PortfolioContainerWrapper).toggleClass(PortfolioContainerWrapperOpen);
//         $("body").toggleClass('body_no_overflow');

//         if($(PortfolioContainerWrapper).hasClass(PortfolioContainerWrapperOpen)) {
//             $(this).find('i').attr('class','fas fa-compress-arrows-alt fa-fw');
//         } else {
//             $(this).find('i').attr('class','fas fa-expand-arrows-alt fa-fw');
//         }
//     });
// });
$(function() {

    var PortfolioContainerOpener = '.portfolio_container_opener';

    var PortfolioContainerWrapperOpen = 'portfolio_container_wrapper_open';

    $('.portfolio_section').on('click', PortfolioContainerOpener, function(e) {

        var PortfolioContainerWrapper = $(this).parent().parent().parent().parent();

        $(PortfolioContainerWrapper).toggleClass(PortfolioContainerWrapperOpen);
        $("body").toggleClass('body_no_overflow');

        if($(PortfolioContainerWrapper).hasClass(PortfolioContainerWrapperOpen)) {
            $(this).find('i').attr('class','fas fa-times fa-fw');
        } else {
            $(this).find('i').attr('class','fas fa-plus fa-fw');
        }
    });

    // $('.portfolio_section').on('mouseenter', PortfolioContainerOpener, function(e) {

    //     var PortfolioContainerWrapper = $(this).parent().parent().parent().parent();
            
    //     if($(PortfolioContainerWrapper).hasClass(PortfolioContainerWrapperOpen)) {
    //         $(this).find('i').attr('class','fas fa-window-close');
    //     } else {
    //         $(this).find('i').attr('class','fas fa-clone');
    //     }
    
    // }).on('mouseleave', PortfolioContainerOpener, function(e) {

    //     var PortfolioContainerWrapper = $(this).parent().parent().parent().parent();
    
    //     if($(PortfolioContainerWrapper).hasClass(PortfolioContainerWrapperOpen)) {
    //         $(this).find('i').attr('class','far fa-window-close');
    //     } else {
    //         $(this).find('i').attr('class','far fa-clone');
    //     }
    // });
});







// **Fadein for portfolio overlay**
// $(document).ready(function() {
//     $('.portfolio_container_wrapper').hover(function() {
        
//         var Li = $(this).parent();

//         var OpenerContainer = $(this).find('.portfolio_header_opener_container');

//         var ImageChoiceContainer = $(this).find('.portfolio_image_choice_container');

//         $(OpenerContainer).toggleClass('portfolio_header_opener_container_display');
//         $(ImageChoiceContainer).toggleClass('portfolio_image_choice_container_display');
//     });
// });
$(function() {
    $('.portfolio_section').on('mouseenter', '.portfolio_container_wrapper', function(e) {
        
        var Li = $(this).parent();

        var OpenerContainer = $(this).find('.portfolio_header_opener_container');

        var ImageChoiceContainer = $(this).find('.portfolio_image_choice_container');

        $(OpenerContainer).addClass('portfolio_header_opener_container_display');
        $(ImageChoiceContainer).addClass('portfolio_image_choice_container_display');

    }).on('mouseleave', '.portfolio_container_wrapper', function(e) {

        var Li = $(this).parent();

        var OpenerContainer = $(this).find('.portfolio_header_opener_container');

        var ImageChoiceContainer = $(this).find('.portfolio_image_choice_container');

        $(OpenerContainer).removeClass('portfolio_header_opener_container_display');
        $(ImageChoiceContainer).removeClass('portfolio_image_choice_container_display');
    });
});


// **Portfolio Image Choice and Switch**
// $(document).ready(function() {
//     $(".portfolio_image_choice_container ul li a").on("click", function(e) {

//         // Remove current portfolio image from a
//         $(this).parent().parent().find('a').not(this).removeClass('current_portfolio_image');
        
//         // Add current portfolio image nav for clicked
//         $(this).addClass('current_portfolio_image');

//         // Find Image of A
//         var ImgChoice = $(this).find('img');

//         // Find Src of Image
//         var ImgAttrSrc = ImgChoice.attr('src');

//         // Find Alt of Image
//         var ImgAttrAlt = ImgChoice.attr('alt');

//         // Main Image Selector
//         var MainImg = $(this).parent().parent().parent().parent().find('.portfolio_image_container').children('img');

//         $(MainImg).attr('src', ImgAttrSrc);
//         $(MainImg).attr('alt', ImgAttrAlt);
//     });
// });
$(function() {
    var ImageAContainer = '.portfolio_image_choice_container ul li a';

    $('.portfolio_section').on('click', ImageAContainer, function(e) {

        // Remove current portfolio image from a
        $(this).parent().parent().find('a').not(this).removeClass('current_portfolio_image');
        
        // Add current portfolio image nav for clicked
        $(this).addClass('current_portfolio_image');

        // Find Image of A
        var ImgChoice = $(this).find('img');

        // Find Src of Image
        var ImgAttrSrc = ImgChoice.attr('src');

        // Find Alt of Image
        var ImgAttrAlt = ImgChoice.attr('alt');

        // Main Image Selector
        var MainImg = $(this).parent().parent().parent().parent().find('.portfolio_image_container').children('img');

        $(MainImg).attr('src', ImgAttrSrc);
        $(MainImg).attr('alt', ImgAttrAlt);
    });
});



// // TEST
// $(function() {

//     var PortfolioNavigation = '.portfolio_navigation_section nav ul li a';
//     // console.log(PortfolioNavigation);

//     $('main').on('click', PortfolioNavigation, function(e) {

//         var UlOfPortfolio = $(this).parent().parent().parent().parent().parent().find('.portfolio_section').children('div').children('ul');
//         // console.log(UlOfPortfolio);

//         if($(UlOfPortfolio).children().length > 0) {
//             console.log(this);
//         } else {
//             // $(this).prev().css('color','#AF0000');
//             // $(this).remove();
//         }
//     });
// });


// **Custom Color Changer**
$(document).ready(function() {
    $("[data-custom-color]").each(function() {

        // Get image div data
        var CustomColor = $(this).attr('data-custom-color');
        
        $(this).css('background-color',CustomColor);
    });

    $("[data-custom-gradient-color]").each(function() {

        // Get image div data
        var CustomColor = $(this).attr('data-custom-gradient-color');
        
        $(this).css('background',CustomColor);
    });
});


// **Custom VSCodeTitle**
$(document).ready(function() {

    var CustomVsCodeASelectorH3 = '.custom_vsc_aed_b_section ul li a h3';
    var CustomVsCodeASelectorH4 = '.custom_vsc_aed_b_section ul li a h4';

    $(CustomVsCodeASelectorH3).each(function() {
        var CustomVsH3Text = $(this).text();
        $(this).parent().find('img').attr('title',CustomVsH3Text);
        $(this).parent().find('img').attr('alt',CustomVsH3Text);
    });

    $(CustomVsCodeASelectorH3).each(function() {
        var CustomVsH3Text = $(this).text();
        $(this).attr('title',CustomVsH3Text);
    });

    $(CustomVsCodeASelectorH4).each(function() {
        var CustomVsH4Text = $(this).text();
        $(this).attr('title',CustomVsH4Text);
    });
});


// $(document).ready(function() {
//     var CustomVsCodeASelector = '.custom_visual_studio_code_section ul li a';    
//     $(CustomVsCodeASelector).each(function() {
//         var CustomVsH3Text = $(this).find('h3').text();
//         $(this).attr('title',CustomVsH3Text);
//     });
// });


// ** Contact Form **
$(document).ready(function() {
    $('.input_label_containment input').click(function() {
        $(this).focus();
        $(this).parent().find('label').addClass('label_active');
    });

    $('.input_label_containment input').focus(function() {
        $(this).parent().find('label').addClass('label_active');
    });

    $('.input_label_containment').find('input').focusout(function() {
        if($(this).val()) {
            $(this).parent().find('label').addClass('label_active');
            // console.log('Have');
        } else {
            $(this).parent().find('label').removeClass('label_active');
            // console.log('Not Have');
        }
    });

    $('.input_label_containment').find('input').each(function() {
        if($(this).val()) {
            $(this).parent().find('label').addClass('label_active');
            // console.log('Have');
        } else {
            $(this).parent().find('label').removeClass('label_active');
            // console.log('Not Have');
        }
    });

    $('.reset_button').click(function() {
        $('.input_label_containment').find('input').each(function() {
            $(this).parent().find('label').removeClass('label_active');
        });
    });
});


$(document).ready(function() {
    $('.textarea_label_containment textarea').click(function() {
        $(this).focus();
        $(this).parent().find('label').addClass('label_active');
    });

    $('.textarea_label_containment textarea').focus(function() {
        $(this).parent().find('label').addClass('label_active');
    });

    $('.textarea_label_containment').find('textarea').focusout(function() {
        if($(this).val()) {
            $(this).parent().find('label').addClass('label_active');
            // console.log('Have');
        } else {
            $(this).parent().find('label').removeClass('label_active');
            // console.log('Not Have');
        }
    });

    $('.textarea_label_containment').find('textarea').each(function() {
        if($(this).val()) {
            $(this).parent().find('label').addClass('label_active');
            // console.log('Have');
        } else {
            $(this).parent().find('label').removeClass('label_active');
            // console.log('Not Have');
        }
    });

    $('.reset_button').click(function() {
        $('.textarea_label_containment').find('textarea').each(function() {
            $(this).parent().find('label').removeClass('label_active');
        });
    });
});



$(document).ready(function() {
    var CasePortBut = '.back_to_portfolio_button';

    $('.case_study_header_section').on('mouseenter', CasePortBut, function(e) {
        $(CasePortBut).css('background-color','white');
        $(CasePortBut).css('color','#FD0000');
        $(CasePortBut).find('p').fadeIn('fast');
    }).on('mouseleave', CasePortBut, function(e) {
        $(CasePortBut).find('p').fadeOut('fast');
        $(CasePortBut).css('background-color','unset');
        $(CasePortBut).css('color','white');
    });
});

// $(document).ready(function() {
//     var SquImgCon = ".cs_squ_is_img_container";
//     var RecImgCon = ".cs_rec_is_img_container";

//     $(SquImgCon).click(function() {
//         $(this).parent().toggleClass('large_image');
//         $("body").toggleClass("body_no_overflow");
//     });

//     $(RecImgCon).click(function() {
//         $(this).parent().toggleClass('large_image');
//         $("body").toggleClass("body_no_overflow");
//     });
// });


$(document).ready(function() {
    var SquImgCon = ".cs_squ_is_img_container";
    var RecImgCon = ".cs_rec_is_img_container";

    $(SquImgCon).click(function() {
        $(this).parent().toggleClass('large_image');
        $("body").toggleClass("body_no_overflow");
    });

    $(RecImgCon).click(function() {
        $(this).parent().toggleClass('large_image');
        $("body").toggleClass("body_no_overflow");
    });
});





// ** Alert **
$(document).ready(function() {
    $('.alert_secondary_wrapper').click(function() {
        $(this).toggleClass('alert_active');
    });
});

// $(document).ready(function() {
//     $('.alert_secondary_wrapper').click(function() {
//         // console.log('trigger hit');
//         $(this).toggleClass('alert_active');
//     });
// });