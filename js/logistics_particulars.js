(function($){

  $logistics_particular = $('.logistics-particulars');


  //开关模态框
  $logistics_particular.find('.more').on('click', function(){
    $modal = $logistics_particular.find('.modal-transport');

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
