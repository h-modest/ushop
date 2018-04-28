(function($, win, doc){

  $check = $('.ushop-checkbox');

  //多选重写
  $check.find('input[type=checkbox]').click(function(e){
    e.stopPropagation();
    $(this).parents('.ushop-checkbox').toggleClass('selected');
  });

})(jQuery, window, document)
