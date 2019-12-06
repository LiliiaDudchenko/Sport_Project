// $(".mobile_menu").click(function () {
//     $(".navigation ul").slideToggle(400);
// });


$('.navigation').on('click', '.mobile_menu', function () {
    $(".navigation ul").slideToggle(400);
});



(function($) {
$(function() {
 
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
 
});
})(jQuery);