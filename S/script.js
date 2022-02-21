$(document).ready(function(){
var _currentFill = "fill:#000";
    $("#Layer_1").click(function (event) { $(event.target).attr("style", _currentFill); })
    var $swatches = $("#swatches");
    $swatches.click(function (event) { 
      $swatch = $(event.target);
      loc = [parseInt($swatch.attr("x"), 10), parseInt($swatch.attr("y"), 10)]
      $("#selection", $swatches).attr("x", loc[0]);
      $("#selection", $swatches).attr("y", loc[1]);
      _currentFill = $swatch.attr("style"); ; 
    })
    $("#tyhjennys").click(function() {
      $("svg path").css("fill", "white");
        
    });
    
  });
