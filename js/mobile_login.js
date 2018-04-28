(function($, win){

  $mobile_login = $('.mobile-login');
  $modal = $mobile_login.find('.modal');

  //打开模态框
  $mobile_login.find('.question').click(function(){
    $modal.removeClass('hide');
    setTimeout(function(){
      $modal.addClass('modal-show');
    },10);
    //关闭模态框
    $modal.find('.modal-close').click(function(){
      $modal.removeClass('modal-show');
      setTimeout(function(){
        $modal.addClass('hide');
      }, 200);
    });
  });

})(jQuery, window)
