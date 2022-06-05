$('.eng').hide();

$('#lang-switcher').click(function () {
  if ($(this).text() === "ENG") {
    $(this).text('LV');
    $('.lv').hide();
    $('.eng').show();
  } else {
    $(this).text('ENG');
    $('.eng').hide();
    $('.lv').show();
  }
})

$('.section').click(function () {
  $(this).toggleClass('hide-background');
});
