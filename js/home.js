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
