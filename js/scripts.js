$(document).ready(function() {
  $(".turtle").click(function(){
    $("#turtle-eggs").toggle();
    $("#turtle-eggs").css("display", "block");
    $("#turtle-eggs").css("margin", "0 auto");
  });
  $("#turtle-eggs").click(function(){
    $("#turtle-eggs").toggle();
  });
  $("button#cat").click(function() {
    $("ul#cat").prepend("<li>meow</li>")
    $("ul#dog").prepend("<li>bark</li>")
    $("ul#cat").children("li").first().click(function() {
      alert("meow");
    });
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      alert('bark');
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("button#dog").click(function() {
    $("ul#dog").prepend("<li>bark</li>")
    $("ul#cat").prepend("<li>meow</li>")
    $("ul#dog").children("li").first().click(function() {
      alert('bark');
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#cat").children("li").first().click(function() {
      alert("meow");
    });
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("button#poop").click(function() {
    $("body").toggleClass("poop")
  })
});
