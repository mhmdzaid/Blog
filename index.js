$(".CardView").mouseenter(function() {
  $(this).animate({
    width: '+=' + "30px",
    height: '+=' + "30px"

  }, 250)
    .animate({
      width: '-=' + "30px",
      height: '-=' + "30px"
    }, 250);
})

console.log($(".navBar a").length);
let items = $(".navBar a")
items.click(function() {
  items.removeClass("active");
  $(this).addClass("active");
});
