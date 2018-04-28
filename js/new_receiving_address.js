(function($){

  $new_receiving_address = $('.new-receiving-address');

  //选择原因
  $new_receiving_address.find('input[name=default-address]').click(function(e){
    e.stopPropagation();
    $this = $(this);
    $new_receiving_address.find('.setting-redio').toggleClass('hover');
  });

  var area = [
    {
      id: 1,
      value: '北京市',
      childs: [{
        id: 2,
        value: '县',
        childs: [{
          id: 3,
          value: '扇贝县'
        },{
          id: 4,
          value: '芜湖县'
        }]
      }]
    },
    {
      id: 5,
      value: '田径市',
      childs: [{
        id: 6,
        value: '田径市',
        childs: [{
          id: 7,
          value: '田径市'
        },{
          id: 8,
          value: '田径市'
        }]
      }]
    },
  ];

  //三级联动选择 省/市/区
  var mobileSelect3 = new MobileSelect({
      trigger: '.city-select',
      title: '省 市 区',
      wheels: [
          {data: area},
      ],
      position:[0, 0, 0],
      transitionEnd:function(indexArr, data){
          //console.log(data);
      },
      callback:function(indexArr, data){
          console.log(data);
      }
  });

  //三级联动选择 街道处
  var mobileSelect3 = new MobileSelect({
      trigger: '.area-select',
      title: '乡/镇/街道',
      wheels: [
          {data: area},
      ],
      position:[0, 0, 0],
      transitionEnd:function(indexArr, data){
          //console.log(data);
      },
      callback:function(indexArr, data){
          console.log(data);
      }
  });

})(jQuery)
