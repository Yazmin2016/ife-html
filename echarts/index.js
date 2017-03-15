
/**
 * Created by hanmiao on 2017/3/15.
 */
var myChart = echarts.init(document.getElementById("main"));
var teams =  ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"];
var champions = [5, 20, 36, 10, 10, 20];
var option = {
    title: {
        text: '柱状图和折线图',
        textStyle: {
            fontSize: 12
        }
    },
    tooltip: {},
    legend: {
        data: ['柱状图','折线图']
    },
    xAxis: {
        data: teams
    },
    yAxis: {},
    series: [{
        name: '柱状图',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#ff0000'
            }
        },
        data: champions
    },{
        name: '折线图',
        type: 'line',
        itemStyle: {
            normal: {
                color: '#006633'
            }
        },
        data: champions
    }]
};
myChart.setOption(option);