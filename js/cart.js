(function($, win){
  $cart = $('.cart');

  //加减数量
  $btn = $cart.find('.btn');

  $btn.click(function(){
    $this = $(this);
    $num = $this.parents('.num').find('input[type=number]');
    var is_add = $this.hasClass('btn-add'),
        num = parseInt($num.val()),
        next_num = is_add ? num++ : (num == 1 ? null : num--);

    $num.val(num);
  });

  $all_select = $cart.find('header .ushop-checkbox input[type=checkbox]');

  //全选/全不选
  $all_select.click(function(e){
    e.stopPropagation();

    $u_check = $cart.find('.content .ushop-checkbox');
    $u_check.removeClass('selected');
    $u_check.toggleClass('selected', $(this).prop('checked'));
  })

})(jQuery,window)
