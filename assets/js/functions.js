$(function() {

  $('body').imagesLoaded(function(){
    $('body').addClass('loaded');
    setTimeout(function(){
      $('.title').addClass('bounceInUp');
    }, 1000);
  });

  var isMobile = false; //initiate as false

  // device detection
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
  }


  if((top.location.pathname === '/') && (isMobile === false)) {
    var clearTimout,
        isChrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()),
        winWidth = $(window).width(),
        $sunset = $('.sunset'),
        $backTrees = $('.backTrees'),
        $midTrees = $('.midTrees'),
        $frontTrees = $('.frontTrees');

    $(window).resize(function(){
      if(isMobile === false){
        if(this.resizeTO) {
          clearTimout(this.resizeTO);
        }
          this.resizeTO = setTimeout(function(){
            $(this).trigger('reloadPage');
          }, 500);
      }
    });

    $(window).bind('reloadPage', function(){
      location.reload();
    });

    if(winWidth > 668){
      $sunset.attr({
        'data-stellar-background-ratio':'0.85',
        'data-stellar-vertical-offset':'0'
      });
      $backTrees.attr({
        'data-stellar-background-ratio':'1.10',
        'data-stellar-vertical-offset':'-250'
      });
      $midTrees.attr({
        'data-stellar-background-ratio':'1.15',
        'data-stellar-vertical-offset':'-350'
      });
      $frontTrees.attr({
        'data-stellar-background-ratio':'1.35',
        'data-stellar-vertical-offset':'-850'
      });
    }
    if(winWidth > 1009){
      $sunset.attr({
        'data-stellar-background-ratio':'0.85',
        'data-stellar-vertical-offset':'0'
      });
      $midTrees.attr({
        'data-stellar-background-ratio':'1.15',
        'data-stellar-vertical-offset':'-150'
      });
      $frontTrees.attr({
        'data-stellar-background-ratio':'1.25',
        'data-stellar-vertical-offset':'-800'
      });
    }
    if(winWidth > 1351 && isChrome){
      $sunset.attr({
        'data-stellar-background-ratio':'1',
        'data-stellar-vertical-offset':'0'
      });
      $midTrees.css('top','775px').attr({
        'data-stellar-background-ratio':'1',
        'data-stellar-vertical-offset':'0'
      });
      $frontTrees.css('top','650px').attr({
        'data-stellar-background-ratio':'1',
        'data-stellar-vertical-offset':'0'
      });
    }
    if(winWidth > 1986 && !isChrome){
      $sunset.attr({
        'data-stellar-background-ratio':'0.85',
        'data-stellar-vertical-offset':'0'
      });
      $midTrees.attr({
        'data-stellar-background-ratio':'1.15',
        'data-stellar-vertical-offset':'0'
      });
      $frontTrees.attr({
        'data-stellar-background-ratio':'1.25',
        'data-stellar-vertical-offset':'-500'
      });
    }
  }

  if(isMobile === false){
    $('#appsHeader .wrapper').attr({
      'data-stellar-background-ratio':'0.5'
    });
    $('#appsHeader .sky, .moon, #appsHeader .twinkle1, #appsHeader .twinkle2').attr({
      'data-stellar-background-ratio':'0.25'
    });
  }

  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    if(top.location.pathname === '/'){

      if(wScroll > $('.makeout-point .animated').offset().top - ($(window).height() / 1.7)){

       $('.makeout-point .animated').each(function(i){

         setTimeout(function(){
           $('.makeout-point .animated').eq(i).addClass('treeShake');
         }, (700 * (Math.exp(i * 0.09))) - 700);

       });

      }

      if(wScroll < $('.makeout-point .animated').offset().top - ($(window).height()) && $('.makeout-point .animated .treeShake')){
        $('.makeout-point .animated').removeClass('treeShake');
      }

    }

  });

  $('.newsHighlights').hover(function(){
   $(this).addClass('jello').one(animationEnd, function(){
     $(this).removeClass('jello');
   });
  });

  $('.logo .animated').hover(function(){
   $(this).addClass('rubberBand').one(animationEnd, function(){
     $(this).removeClass('rubberBand');
   });
  });

  $('#workStationImg').hover(function(){
    var customdata = $(this).parent().attr('data-gif');
    $(this).attr('src',customdata);
  }, function(){
    $(this).attr('src',$(this).attr('data-orig'));
  });

// Toggle Mobil Navbar:
  $('.mobile-nav-toggle').on('click', function(){
    $('.mobile-nav-toggle, .mobile-nav').toggleClass('is-open');

    if($('.mobile-nav').hasClass('is-open')){
      $('body').css('overflow',"hidden");
      $('a').on('click', function(){
        $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
        $('body').css('overflow',"auto");
      });
    } else {
      $('body').css('overflow',"auto");
    }
  });

// Contact Us Overlay
  $('li.contactUs').on('click', function(){
    $('.overlay').addClass('is-open');
  });

  $('.close-btn').on('click', function(){
    $('.overlay').removeClass('is-open');
  });

// Sweet Alert Confirmation Messages
  var swal;
  if (window.location.hash === "#thanks") {
    swal("Thanks dude!", "We'll get in touch soon!", "success");
  }
  if (window.location.hash === "#nextApp") {
    swal("Awesome!", "We'll be sure to notify you!", "success");
  }

// Parallax
  $('#scene').parallax();
  $.stellar({
    resonsive: true
  });
});
