$(document).ready(function () {
    $(".portfolio").hover(function(){
    $(this).find(".absolute").append( $( "<span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, possimus! </span>" ) )
  },function(){
    
    $( this ).find( "span" ).last().remove()
    });
  /////////////////////////////////////////////////////////////

  $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
  });
  ////////////////////////////////////////////////////////////////


  var myNav = document.getElementById("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};
 
})
