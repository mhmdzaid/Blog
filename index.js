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
