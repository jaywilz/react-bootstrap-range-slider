$(document).ready(() => {

  $('.toggle').each(function() {

    $(this).click(function() {

      $(this).next('pre').toggleClass('show');

    });

  });

});
