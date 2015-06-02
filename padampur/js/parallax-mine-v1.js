
$('div.image').each(function(){
    var $obj = $(this);
    $(window).scroll(function(){
    var ypos = -($(window).scrollTop()/$obj.data('speed'));
    var bgpos = '50%'+ ypos + 'px';
    $(obj).css('background-position', bgpos);
    
    
    });


});
