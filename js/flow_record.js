(function($){

  $flow_record = $('.flow-record');

  $flow_record.find('input[type=month]').bind('input propertychange', function() {
    var date_arr = $(this).val().split('-'),
        $date = $flow_record.find('.flow-profit .date');

    console.log(date_arr);
    $date.find('.year').html(date_arr[0]);
    $date.find('.month').html(date_arr[1]);
  });
})(jQuery)
