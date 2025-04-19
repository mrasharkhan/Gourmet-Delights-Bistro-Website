$(document).ready(function () {
    $('#reservation-form').submit(function (e) {
      e.preventDefault();
      $('#reservation-form').fadeOut(400, function () {
        $('#confirmation').fadeIn(600);
      });
    });
  });
  