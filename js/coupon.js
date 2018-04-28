(function($,win){
  $coupon = $('.coupon');

  //切换优惠卷选项
  $coupon.find('.content nav li').click(function(){
    $this = $(this);
    $li = $this.parents('ul').find('li');
    var index = $this.index();
    if (!$this.hasClass('hover')) {
      $li.removeClass('hover');
      $this.addClass('hover');
      $coupon.find('.content .list').addClass('hide');
      $coupon.find('.content .list').eq(index).removeClass('hide');
    }
  });

})(jQuery, window)
