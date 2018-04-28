(function($){

  //图片轮播
   TouchSlide({
     slideCell:"#slideNav",
     titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
     mainCell:".bd ul",
     effect:"leftLoop",
     autoPage:true, //自动分页
   });

   $index = $('.index');

   $index.find('.search').on('click', function() {
      $('body').addClass('fixed');

      $modal = $('.modal-search');
      $modal.addClass('show');
      $modal.find('input[type=text]').val('').focus();

      //关闭搜索
      $modal.find('.modal-close').on('click', function(){
        $modal.removeClass('show');
        $('body').removeClass('fixed');
      });

      //清空历史

      $modal.find('.btn-empty').unbind('click').on('click', function(){
        console.log('你点击的是清空按钮');
      });
   });

})(jQuery)
