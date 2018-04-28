(function($, win){

  $return_purchase = $('.return-purchase');

  //选择原因
  $return_purchase.find('input[name=reason]').click(function(e){
    e.stopPropagation();
    $this = $(this);
    $return_purchase.find('.reason-redio label').removeClass('hover');
    $this.parents('label').addClass('hover');
  });

  //开\关模态框
  $return_purchase.find('.switch-reason').on('click',function(){
    $modal = $('.modal-reason');
    $modal.addClass('modal-show');
    $modal.find('.modal-close').on('click', function(){
      $modal.removeClass('modal-show');
    });
  });
})(jQuery, window)
