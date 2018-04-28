(function($,win){
  $order = $('.order');
  $cart = $('.cart-add');
  $buy = $('.purchase');
  $shadow = $('.modal-shadow');

  //加入购物车
  $cart.click(function(){
    var modal = $('<div class="modal">\
                    <i class="iconfont icon-gouxuan"></i>\
                    <p>加入购物车成功</p>\
                  </div>'),
        time = 500;
    $order.append(modal);

    $modal = $('.modal');
    //定时隐藏
    setTimeout(function(){
      $modal.remove();
    }, time);
  });


  var modal_action = function(is_open, $open, $that){
    if (is_open) {
      $open.click(function(){
        $that.addClass('show');
        $shadow.removeClass('hide');
        $('body').addClass('fixed');
      });
    } else {
      $that.find('.modal-close').click(function(){
        $that.removeClass('show');
        $shadow.addClass('hide');
        $('body').removeClass('fixed');
      });
    }
  }

  //购买操作
  modal_action(1, $buy, $('.modal-goods'));
  modal_action(0, $buy, $('.modal-goods'));

  //加减数量
  $modal_btn = $('.modal-goods .modal-footer').find('.btn');

  $modal_btn.click(function(){
    $this = $(this);
    $num = $this.parents('.num').find('input[type=number]');
    var is_add = $this.hasClass('btn-add'),
        num = parseInt($num.val()),
        next_num = is_add ? num++ : (num == 1 ? null : num--);

    $num.val(num);
  });

  //地址操作
  modal_action(1, $('.jump-address'), $('.modal-address'));
  modal_action(0, $('.jump-address'), $('.modal-address'));

  //显示服务
  modal_action(1, $('.jump-service'), $('.modal-service'));
  modal_action(0, $('.jump-service'), $('.modal-service'));

  //显示分享
  modal_action(1, $('.share'), $('.modal-share'));
  modal_action(0, $('.share'), $('.modal-share'));

  //切换详情/商品页
  $order.find('.section-title').click(function(){
    $order.toggleClass('order-details');
  })

  //图片轮播
   TouchSlide({
     slideCell:"#slideBox",
     titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
     mainCell:".bd ul",
     effect:"leftLoop",
     autoPage:true, //自动分页
   });
})(jQuery,window)
