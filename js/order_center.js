(function($){

  $order_center = $('.personal-order');

  //点击搜索
  $order_center.find('.search').on('click', function(){
    $modal = $order_center.find('.modal-search');
    $modal.addClass('show');

    $modal.find('.modal-close').on('click', function(){
      $modal.removeClass('show');
    });
  });

})(jQuery)
