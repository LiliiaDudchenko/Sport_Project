// $(".mobile_menu").click(function () {
//     $(".navigation ul").slideToggle(400);
// });


$('.navigation').on('click', '.mobile_menu', function () {
    $(".navigation ul").slideToggle(400);
});