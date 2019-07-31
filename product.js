// ページスクロール
$(function() {
  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});

// トップボタンスクロール
$(document).ready(function() {
	//トップではフェードアウト(初期非表示)
	$(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            $('#topBtn').fadeIn();
       } else {
            $('#topBtn').fadeOut();
            }
       });
  $('#topBtn').click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});