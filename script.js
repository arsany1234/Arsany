$(function () {
  var links = $('#nav a'),
      counter  = 0,
      pageSlider   = $('#page-slider'),
      sliderChildern = pageSlider.children(),  
      sliderLength = sliderChildern.length;
 
  pageSlider.css(
    { 'width':(100 *sliderLength) +'%',
      'position': 'relative'
    });
  sliderChildern.each( function(){
    $(this).css(
      { 'width': 100/sliderLength +'%',
        'float': 'right'
      });
  });
 
  function moveSlide(pos){
    pageSlider.animate({
        'right': ( -pos *100) +'%'
      }, 'slow');
     counter = pos;
     $('.slide-right')[counter === 0 ? 'hide' : 'show']('slow');
     $('.slide-left')[counter === sliderLength-1 ? 'hide' : 'show']('slow');
  }

  links.on( 'click', function(){
    moveSlide( links.index(this));
    return false;
  });
  moveSlide(counter);
});
