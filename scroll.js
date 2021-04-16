$('#top').click(function (event) {
  event.preventDefault();
  var works_y = $('#works').offset();
  $('html, body').animate({ scrollTop: works_y.top }, 400);
});
