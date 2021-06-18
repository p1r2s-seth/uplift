// hamburger-navbar
$(document).ready(function(){
	$(".hamburger").click(function(){
		$(".hamul").show()
	});
});
$(document).ready(function(){
	$(".cross").click(function(){
		$(".hamul").hide()
	});
});

// line
  	$(document).ready(function(){
  $(".masthead-subheading").on({
    mouseenter: function(){
      $(".line").css("width", "100px");
    },  
    mouseleave: function(){
      $(".line").css("width", "50px");
    }  
  });
});

  	  	$(document).ready(function(){
  $(".masthead-heading").on({
    mouseenter: function(){
      $(".line").css("width", "100px");
    },  
    mouseleave: function(){
      $(".line").css("width", "50px");
    }  
  });
});

// smoothscroll

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});

// about us
$(document).ready(function(){
  $(".button").click(function(){
    $(".panel").slideToggle("slow");
  });
});

// navscroll
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 500){
            $(".navbar").css({"background-color":"#1e1e1e"});   
        }
        else{
            $(".navbar").css({"background-color":"transparent"});
        }

    });
});

// owlCarousel

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
});