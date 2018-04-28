(function($){


   $chief_shop = $('.chief-shop');
   $shadow = $chief_shop.find('.modal-shadow');

   //保存图片
   $chief_shop.find('.icon-img-save').on('click', function(){
     var modal = $('<div class="modal">\
                     <i class="iconfont icon-gouxuan"></i>\
                     <p>图片已保存相册</p>\
                   </div>'),
         time = 500;
     $chief_shop.append(modal);

     $modal = $chief_shop.find('.modal');
     //定时隐藏
     setTimeout(function(){
       $modal.remove();
     }, time);
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

   //显示分享
   modal_action(1, $chief_shop.find('.icon-share'), $('.modal-share'));
   modal_action(0, $chief_shop.find('.icon-share'), $('.modal-share'));

   //显示添加
   modal_action(1, $chief_shop.find('.icon-delete'), $('.modal-delete'));
   modal_action(0, $chief_shop.find('.icon-delete'), $('.modal-delete'));

   $chief_shop.find('.modal-delete .modal-confirm').on('click', function(){
     $('.modal-delete').removeClass('show');
     setTimeout(function(){
       $shadow.addClass('hide');
       $('body').removeClass('fixed');

       var modal = $('<div class="modal">\
                       <i class="iconfont icon-gouxuan"></i>\
                       <p>商品已删除</p>\
                     </div>'),
           time = 500;
       $chief_shop.append(modal);

       $modal = $chief_shop.find('.modal');
       //定时隐藏
       setTimeout(function(){
         $modal.remove();
       }, time);
     },300);

   });

   $chief_shop.find('.modal-share ul').each(function(){
     $_ = $(this);
     var length = $_.find('li').length,
         size = length/4;

     if(length != 4) {
       $_.css('width', size*100 + '%');
     }
   });

})(jQuery)
