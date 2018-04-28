(function($, win){

  $tracking_number = $('.tracking-number');

  //选择原因
  $tracking_number.find('input[name=deliver-type]').click(function(e){
    e.stopPropagation();
    $this = $(this);
    $tracking_number.find('.reason-redio label').removeClass('hover');
    $this.parents('label').addClass('hover');
  });

  //开\关模态框
  $tracking_number.find('.deliver-type').on('click',function(){
    $modal = $('.modal-deliver-type');
    $modal.addClass('modal-show');
    $modal.find('.modal-close').on('click', function(){
      $modal.removeClass('modal-show');
    });
  });

  //提交
  $tracking_number.find('.submit').on('click', function(){
    win.location.href="快递单号-上传成功.html";
  })
})(jQuery, window)
