(function($){

  //图片轮播
   TouchSlide({
     slideCell:"#slideNav",
     titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
     mainCell:".bd ul",
     effect:"leftLoop",
     autoPage:true, //自动分页
   });

   $product_selection = $('.product-selection');
   $shadow = $product_selection.find('.modal-shadow');

   //保存图片
   $product_selection.find('.icon-img-save').on('click', function(){
     var modal = $('<div class="modal">\
                     <i class="iconfont icon-gouxuan"></i>\
                     <p>图片已保存相册</p>\
                   </div>'),
         time = 500;
     $product_selection.append(modal);

     $modal = $product_selection.find('.modal');
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
   modal_action(1, $product_selection.find('.icon-share'), $('.modal-share'));
   modal_action(0, $product_selection.find('.icon-share'), $('.modal-share'));

   //显示添加
   modal_action(1, $product_selection.find('.icon-add'), $('.modal-add'));
   modal_action(0, $product_selection.find('.icon-add'), $('.modal-add'));

   $product_selection.find('.modal-share ul').each(function(){
     $_ = $(this);
     var length = $_.find('li').length,
         size = length/4;

     if(length != 4) {
       $_.css('width', size*100 + '%');
     }
   });

   //开关模态框
   $product_selection.find('.more').on('click', function(){
     $modal = $product_selection.find('.modal-store');

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
