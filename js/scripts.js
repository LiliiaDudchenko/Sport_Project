$('.navigation').on('click', '.mobile_menu', function () {
  $(".navigation ul").slideToggle(400);
});



(function ($) {
  $(function () {

    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

  });
})(jQuery);

jQuery(window).resize(function () {
  const windowWidth = $(window).width();
  console.log(windowWidth);
  if (windowWidth > 768) {
    $('.navigation ul').css({
      display: 'flex'
    })
  } else {
    $('.navigation ul').css({
      display: 'none'
    })
  }
});