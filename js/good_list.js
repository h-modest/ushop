(function($, win){

  $index = $('.index');

  var list_resize = function() {
    $list = $index.find('.good-type-list');
    var winW = $(win).width(),
        listW = Math.ceil($list.find('li').length * 73.59);

    if (listW < winW) {
        $list.addClass('telescopic');
    } else {
        $list.removeClass('telescopic');
    }
  }

  //随屏幕大小而改变
  $(win).resize(function(){
    list_resize();
  });

  list_resize();

  //已售完
  $sold_out = $index.find('.sold-out');
  $sold_out.each(function(){
    $_ = $(this);
    $img = $_.parents('li').find('img');
    $_.css({
      width: $img.width(),
      height: $img.height()
    })
  });
})(jQuery, window)
