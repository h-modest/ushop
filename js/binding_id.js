(function(doc){

  var drawChart = function() {
    //图表展示
    var chart = document.getElementsByClassName('chart-profit'),
        l = chart.length,
        title = '月消费',
        name = '消费';

    for (var i = 0; i < l; i++) {
      var myChart = echarts.init(chart[i]),
          mainColor = '#fea509',
          option = {
            title: {
              text: title,
              textStyle: {
                color: mainColor,
                fontStyle: 'normal',
                fontSize: 14,
              },
              left: 30,
            },
            legend: {
              data: [name],
              orient: 'vertical',  //垂直显示
              x: 'right',
              y: 'center',
            },
            grid: {
                bottom: 10,
                right: 80,
                containLabel: true
            },
            xAxis: {
                name: '月份',
                type: 'category',
                data: ['一月', '二月', '三月', '四月', '五月'],
                axisLine: {
                  lineStyle: {
                    color: mainColor,
                  }
                },
                axisLabel: {
                  fontSize: 11,
                },
            },
            yAxis: {
                name: '人民币',
                type: 'value',
                axisLine: {
                  lineStyle: {
                    color: mainColor,
                  }
                },
                splitLine: {
                  show:false,
                },
            },
            series: [{
                name: name,
                label: {
                  show: true,
                  position: 'top',
                },
                data: [200, 300, 400, 350, 250],
                type: 'bar',
                barWidth: '50%',
                itemStyle:{
                  normal:{
                      color:mainColor //修改颜色
                  }
                },
            },
          ],
          };

      myChart.setOption(option);
    }
  }

  drawChart();


  //展示图表
  $binding_id = $('.binding-id');

  $binding_id.find('.consump-switch').on('click', function(){
    $parents = $(this).parents('.member-section');
    $binding_id.find('.member-section').not($parents).removeClass('open');
    $parents.toggleClass('open');
  });

  //切换菜单
  $binding_id.find('.content nav li').on('click', function(){
    $_ = $(this);
    $content = $_.parents('.content');
    $li = $_.parents('ul').find('li');
    var index = $_.index();

    $li.removeClass('hover');
    $_.addClass('hover');

    index == 1 ? $content.addClass('hover') : $content.removeClass('hover');
  });

})(jQuery, document)
