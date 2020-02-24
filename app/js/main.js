
$('body').on('click', '.btn_main', function () {
  var id = $(this).data('main');
  $('.btn_main').removeClass('is-active');
  $(this).addClass('is-active');
  $('.btn_def button').removeClass('is-active');
  $('.btn_def button[data-main="' + id + '"]').addClass('is-active')
})

$('body').on('click', '.btn_plat.is-active', function () {
  var id = $(this).data('id');
  $('.plat').hide().promise().done(function () {
    $('.plat[data-id="' + id + '"]').show();
  })
})


