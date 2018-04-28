(function($){

  $shipping_address = $('.shipping-address');
  $shadow = $shipping_address.find('.modal-shadow');

  //点击管理
  $shipping_address.find('.setting-edit').on('click', function(){
    $_ = $(this);
    var txt = $_.hasClass('cancle') ? '管理' : '取消';

    $_.toggleClass('cancle').text(txt);

    $shipping_address.find('li').toggleClass('hover');
  });

  //开/关模态框
  var modal_action = function(is_open, $open, $that){
    var t = 300;
    if (is_open) {
      $open.click(function(){
        $that.addClass('show');
        $shadow.removeClass('hide');
        $('body').addClass('fixed');
      });
    } else {
      $that.find('.modal-close').click(function(){
        $that.removeClass('show');
        setTimeout(function(){
          $shadow.addClass('hide');
          $('body').removeClass('fixed');
        },t);
      });
    }
  }

  //删除模态框
  modal_action(1, $shipping_address.find('.section-delete'), $('.modal-delete'));
  modal_action(0, $shipping_address.find('.section-delete'), $('.modal-delete'));

  //默认地址模态框
  modal_action(1, $shipping_address.find('.setting-default .inferior'), $('.modal-default'));
  modal_action(0, $shipping_address.find('.section-default .inferior'), $('.modal-default'));

  $shipping_address.find('.modal-delete .modal-confirm').on('click', function(){
    $('.modal-delete').removeClass('show');
    $shadow.addClass('hide');
    $('body').removeClass('fixed');

    var modal = $('<div class="modal">\
                    <i class="iconfont icon-gouxuan"></i>\
                    <p>图片已保存相册</p>\
                  </div>'),
        time = 500;
    $shipping_address.append(modal);

    $modal = $shipping_address.find('.modal');
    //定时隐藏
    setTimeout(function(){
      $modal.remove();
    }, time);
  });
})(jQuery)
