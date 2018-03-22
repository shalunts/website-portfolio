$(document).ready(function(){

  var intro = $("#intro"),
      profile = $("#profile"),
      skills = $("#skills"),
      svg = $("#svg"),
      photography = $("#photography"),
      projects = $("#projects"),
      footer = $("#footer"),
      whatIDo = $('#what-i-do');

  profile.css("display", "none");
  skills.css("display", "none");
  svg.css("display", "none");
  photography.css("display", "none");
  projects.css("display", "none");
  footer.css("display", "none");



  $("#scroll-down-icon").on("click", function(){

    profile.css("display", "block");
    skills.css("display", "block");
    svg.css("display", "flex");
    photography.css("display", "flex");
    projects.css("display", "flex");
    footer.css("display", "flex");
    intro.css("display", "none"),
    whatIDo.css("display", "flex");



    $(".nav").find(".active").removeClass("active");
    $("#menu--profile").addClass("active");
  });



// Show active class in menu

  $(".nav a").on("click", function(){
     $(".nav").find(".active").removeClass("active");
     $(this).parent().addClass("active");
  });

  //Smooth Scroll
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

// Sticky menu

  var nav = $(".menu"),
      pos = nav.offset().top;
  $(window).scroll(function(){
    if($(this).scrollTop()>pos){
      $(".profile").css("margin-top", "50px");
      nav.addClass("fixed");
    }
    else{
      $(".profile").css("margin-top", "0px");

      nav.removeClass("fixed");
    }
  });

// Menu dropdown toggle for mobile devices

  $(".navbar-nav li a").click(function(event) {
      if (!$(this).parent().hasClass('dropdown'))
          $(".navbar-collapse").collapse('hide');
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



// jQuery(function($)
// {
//   $("#contact_form").submit(function()
//   {
//     var email = $("#email").val(); // get email field value
//     var name = $("#name").val(); // get name field value
//     var msg = $("#msg").val(); // get message field value
//     $.ajax(
//       {
//         type: "POST",
//         url: "https://mandrillapp.com/api/1.0/messages/send.json",
//         data: {
//           'key': 'sVRLFidC1A7K56TuUkyUQg',
//           'message': {
//             'from_email': email,
//             'from_name': name,
//             'headers': {
//               'Reply-To': email
//             },
//             'subject': 'Website Contact Form Submission',
//             'text': msg,
//             'to': [
//               {
//                 'email': 'hayk.shalunts@gmail.com',
//                 'name': 'Hayk Shalunts',
//                 'type': 'to'
//               }]
//             }
//           }
//         })
//         .done(function(response) {
//           alert('Your message has been sent. Thank you!'); // show success message
//           $("#name").val(''); // reset field after successful submission
//           $("#email").val(''); // reset field after successful submission
//           $("#msg").val(''); // reset field after successful submission
//         })
//         .fail(function(response) {
//           alert('Error sending message.');
//         });
//         return false; // prevent page refresh
//       });
//     });
