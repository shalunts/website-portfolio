$(document).ready(function(){
  $(".nav a").on("click", function(){
     $(".nav").find(".active").removeClass("active");
     $(this).parent().addClass("active");
  });  
});

// Create a clone of the menu, right next to original.
$('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}


//Smoth Scroll
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

// Cards in profile start

(function($) {


  $.fn.visible = function(partial) {

    var $t            = $(this),
    $w            = $(window),
    viewTop       = $w.scrollTop(),
    viewBottom    = viewTop + $w.height(),
    _top          = $t.offset().top,
    _bottom       = _top + $t.height(),
    compareTop    = partial === true ? _bottom : _top,
    compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };


})(jQuery);


var win = $(window);

var allMods = $(".card");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

});

// Cards in profile end


// SVG color picking start

var radioPicked = suit;

function changeRadio(value){

  radioPicked = document.getElementById(value);
}

function myFunction(){
  var cl = document.getElementById('color').value;
  var colval = document.getElementById('colval');
  colval.innerHTML = cl;
  radioPicked.setAttribute("fill", cl);

}

function svgReset() {

  document.getElementById("suit").setAttribute("fill", "#19224f");
  document.getElementById("suit_details").setAttribute("fill", "#131724");
  document.getElementById("pocket_square").setAttribute("fill", "#fff");
  document.getElementById("shirt").setAttribute("fill", "#fff");
  document.getElementById("hair").setAttribute("fill", "#050606");

}
// SVG color picking end



jQuery(function($)
{
  $("#contact_form").submit(function()
  {
    var email = $("#email").val(); // get email field value
    var name = $("#name").val(); // get name field value
    var msg = $("#msg").val(); // get message field value
    $.ajax(
      {
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'sVRLFidC1A7K56TuUkyUQg',
          'message': {
            'from_email': email,
            'from_name': name,
            'headers': {
              'Reply-To': email
            },
            'subject': 'Website Contact Form Submission',
            'text': msg,
            'to': [
              {
                'email': 'hayk.shalunts@gmail.com',
                'name': 'Hayk Shalunts',
                'type': 'to'
              }]
            }
          }
        })
        .done(function(response) {
          alert('Your message has been sent. Thank you!'); // show success message
          $("#name").val(''); // reset field after successful submission
          $("#email").val(''); // reset field after successful submission
          $("#msg").val(''); // reset field after successful submission
        })
        .fail(function(response) {
          alert('Error sending message.');
        });
        return false; // prevent page refresh
      });
    });
