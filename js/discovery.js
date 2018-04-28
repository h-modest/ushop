(function($){

  $discovery = $('.discovery');
  $shadow = $discovery.find('.modal-shadow');

  //点击喜欢
  $discovery.find('.btn-love').on('click', function(){
    $(this).toggleClass('hover');
  });

  var modal_action = function(is_open, $open, $that){
    if (is_open) {
      $open.click(function(){
        $that.addClass('show');
        $shadow.removeClass('hide');
        $('body').addClass('fixed');
      });
    } else {
      $that.find('.modal-close').click(function(){
        $that.removeClass('show');
        $shadow.addClass('hide');
        $('body').removeClass('fixed');
      });
    }
  }

  //显示分享
  modal_action(1, $discovery.find('.btn-share'), $discovery.find('.modal-share'));
  modal_action(0, $discovery.find('.btn-share'), $discovery.find('.modal-share'));

})(jQuery)
