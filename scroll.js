$('#top').click(function (event) {
  event.preventDefault();
  var work_y = $('.work').offset();
  $('html, body').animate({ scrollTop: work_y.top }, 400);
});
