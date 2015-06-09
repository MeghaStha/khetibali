if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

var time = 1000;
var percentageToScroll = 1.0;
var documentHeight = $('.slide').height();
console.log(documentHeight);
var scrollAmount = Math.floor(documentHeight * percentageToScroll);


function wheel(event) {
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle();
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle() {

    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (scrollAmount * delta)
    }, time);
}


$(document).keydown(function (e) {

    switch (e.which) {
        //up
        case 38:
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: $(window).scrollTop() - scrollAmount
            }, time);
            break;

            //down
        case 40:
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: $(window).scrollTop() + scrollAmount
            }, time);
            break;
    }
});
/*$(document).ready(function () {
    var divs = $('.slide');
    var dir = 'up'; // wheel scroll direction
    var div = 0; // current div
    $(document.body).on('DOMMouseScroll mousewheel', function (e) {
        if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
            dir = 'down';
        } else {
            dir = 'up';
        }
        // find currently visible div :
        div = -1;
        divs.each(function(i){
            if (div<0 && ($(this).offset().top >= $(window).scrollTop())) {
                div = i;
            }
        });
        if (dir == 'up' && div > 0) {
            div--;
        }
        if (dir == 'down' && div < divs.length) {
            div++;
        }
        //console.log(div, dir, divs.length);
        $('html,body').stop().animate({
            scrollTop: divs.eq(div).offset().top
        }, 800);
        return false;
    });
	  $(document).on("keydown", function(e) {
	      div = -1;
        divs.each(function(i){
            if (div<0 && ($(this).offset().top >= $(window).scrollTop())) {
                div = i;
            }
        });
       if (e.keyCode == 40) { 
			div++;
       }
	   if (e.keyCode === 38){
			div--;
	   }
       $('html,body').stop().animate({
            scrollTop: divs.eq(div).offset().top
        }, 800);
        return false;
  });
      $(window).resize(function () {
        $('html,body').scrollTop(divs.eq(div).offset().top);
    });
	$('#down').click(function(){
	 div = -1;
        divs.each(function(i){
            if (div<0 && ($(this).offset().top >= $(window).scrollTop())) {
                div = i;
            }
        });
	div++;
	 $('html,body').stop().animate({
            scrollTop: divs.eq(div).offset().top
        }, 800);
        return false;
  });
      $(window).resize(function () {
        $('html,body').scrollTop(divs.eq(div).offset().top);
    });

		$('#up').click(function(){
	 div = -1;
        divs.each(function(i){
            if (div<0 && ($(this).offset().top >= $(window).scrollTop())) {
                div = i;
            }
        });
	div--;
	 $('html,body').stop().animate({
            scrollTop: divs.eq(div).offset().top
        }, 800);
        return false;
  });
      $(window).resize(function () {
        $('html,body').scrollTop(divs.eq(div).offset().top);
    });
	
});*/

