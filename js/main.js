const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//listen for tab click
tabItems.forEach(item=>item.addEventListener('click', selectItem));
 
//select tab content item
function selectItem(e)	{
  removeColor();
  removeShow();
  removeTabBorder();
  //add color to current tab
  this.classList.add('tab-color');
  //add color to current tab
  this.classList.add('tab-border');
  //Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //add show class
  tabContentItem.classList.add('show');
}

function removeTabBorder(){
	tabItems.forEach(item=>item.classList.remove('tab-border'));
}

function removeColor(){
	tabItems.forEach(item=>item.classList.remove('tab-color'));
}

function removeShow(){
	tabContentItems.forEach(item=>item.classList.remove('show'));
}



$(document).ready(function(){
/* sticky navigation*/ 
$('.section-1').waypoint(function(direction){
    if(direction=="down"){
    	$('nav').addClass('sticky');
    }else{
    	$('nav').removeClass('sticky');
    }
     },{
     offset: '60px'
});

/* navigation scroll*/
$(function(){

$('a[href*="#"]:not([href=#])').click(function(){
    if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&& location.hostname==this.hostname){
      var target=$(this.hash);
      target=target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if(target.length){
      	$('html,body').animate({
      		scrollTop: target.offset().top
      	}, 1000)
      	return false;
      }
    }
});
});

/* animation-on-scroll*/
$('.wp-1').waypoint(function(direction){
    $('.wp-1').addClass('animated fadeInUp');
}, {
	offset: '50%'
});
$('.wp-2').waypoint(function(direction){
    $('.wp-2').addClass('animated fadeInUp');
}, {
	offset: '40%'
});
$('.wp-3').waypoint(function(direction){
    $('.wp-3').addClass('animated fadeInUp');
}, {
	offset: '40%'
});
$('.wp-4').waypoint(function(direction){
    $('.wp-4').addClass('animated fadeInUp');
}, {
	offset: '40%'
});
$('.wp-5').waypoint(function(direction){
    $('.wp-5').addClass('animated fadeInUp');
}, {
	offset: '40%'
});


/* mobile-nav*/
$('.mobile-nav-icon').click(function(){
   var nav = $('.main-nav');
   var icon = $('.mobile-nav-icon i');

   nav.slideToggle(500);
   if(icon.hasClass('fa-bars')){
       icon.addClass('fa-times')
       icon.removeClass('fa-bars')
   }else{
       icon.addClass('fa-bars')
       icon.removeClass('fa-times')
   }
});

 });