
$("button#button").on("click", function() {
  var random = Math.floor((Math.random() * 3) );
  $("div#quote").html(quotes[random].quote);
});