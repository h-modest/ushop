(function($){

  $store_center = $('.store-center');

  //开关模态框
  $store_center.find('.more').on('click', function(){
    $modal = $store_center.find('.modal-store');

    $('body').addClass('fixed');
    $modal.removeClass('hide');

    setTimeout(function(){
      $modal.find('.spinner').addClass('show');
    },10);

    $modal.find('.modal-shadow').on('click', function(){
      $modal.find('.spinner').removeClass('show');
      setTimeout(function(){
        $modal.addClass('hide');
        $('body').removeClass('fixed');
      },200);
    })
  });

})(jQuery)
