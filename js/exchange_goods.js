(function($, win){

  $exchange_goods = $('.exchange-goods');

  //选择原因
  $exchange_goods.find('input[name=reason]').click(function(e){
    e.stopPropagation();
    $this = $(this);
    $exchange_goods.find('.reason-redio label').removeClass('hover');
    $this.parents('label').addClass('hover');
  });

  //开\关模态框
  $('.exchange-reason').on('click',function(){
    $modal = $('.modal-reason');
    $modal.addClass('modal-show');
    $modal.find('.modal-close').on('click', function(){
      $modal.removeClass('modal-show');
    });
  });
})(jQuery, window)
