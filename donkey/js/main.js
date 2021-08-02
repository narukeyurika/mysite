
// ナビゲーションドロップダウンメニュー
      $(function () {
        $('.c-global-nav .menu-item-has-children').mouseover(function() {  // マウスを乗せると
          $(this).find('ul.sub-menu').stop().slideDown();//サブメニューを表示
        }).mouseout(function(){
          $(this).find('ul.sub-menu').stop().slideUp();//サブメニューを非表示
        });
      });

 // よくある質問
$(function () {
      $(".qa-list dd").hide();
      $(".qa-list dl").on("click", function(e){
          $('dd',this).slideToggle('fast');
          if($(this).hasClass('open')){
              $(this).removeClass('open');
          }else{
              $(this).addClass('open');
          }
      });
    });

//ハンバーガーメニュー
$(function (){
      new Hiraku('.js-offcanvas', {
        btn: ".js-offcanvas-btn",
        fixedHeader: ".js-fixed-header",
      });
    });


//ハンバーガーナブ
      $(function () {
        $('.ham_nav ul li').mouseover(function() {  // マウスを乗せると
          $(this).find('ul.ham_sub-menu').stop().slideDown();//サブメニューを表示
        }).mouseout(function(){
          $(this).find('ul.ham_sub-menu').stop().slideUp();//サブメニューを非表示
        });
      });

$(function () {
  $('.mobile-menu.menu-item').click(function () {  // マウスを乗せると
    $(this).find('ul .sub-menu').stop().slideDown();//サブメニューを表示
  }).mouseout(function () {
    $(this).find('ul. sub-menu').stop().slideUp();//サブメニューを非表示
  });
});

// ドロップダウンメニュー
//.dropdown-menuを一旦隠す
$(function () {
$('.menu').find('.dropdown-menu').hide();
//.menuをhoverした場合
$('.menu').hover(function(){
  //.dropdown-menuをslideDown
  $(".dropdown-menu:not(:animated)", this).slideDown();
  //hoverが外れた場合
    }, function(){
  //.dropdown-menuをslideUp
  $(".dropdown-menu",this).slideUp();
});
});

$(function(){//ハンバーガーメニュー元の開閉
  $('.sub_menu').hide();
  $('.main_menu').click(function(){
  $('ul.sub_menu').slideUp();
  $('.main_menu').removeClass('open');
  if($('+ul.sub_menu',this).css('display') == 'none'){
    $('+ul.sub_menu',this).slideDown();
    $(this).addClass('open');
}
  });
});







$(function () {//ハンバーガーメニューの子要素の開閉
$('.mobile-menu .sub-menu').hide();
$(".mobile-menu .menu-item-has-children a").on("click", function () {
    $(this).next().slideToggle('slow');
    $(this).parent().toggleClass('open');
  });
});

// return false;を指定すると推移は停止できるがクリックできなくなっちゃう
/*子要素が全部開かないようにネクストを指定したけどうまくいかない
$(function (){
  $(".mobile-menu .menu-item-has-children").on("click", function () {
    $('this').next().css('color','green');
    $('.mobile-menu .menu-item-has-children').toggleClass('open');
    return false;
  });
  });

  $(".mobile-menu .menu-item-has-children a").on("click", function () {
  $('.mobile-menu .sub-menu').slideToggle('slow');
  $('.mobile-menu .menu-item-has-children').toggleClass('open');
  return false;
});
*/
