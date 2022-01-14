import React, { Component } from 'react'

import * as echarts from 'echarts'

import { Button, Card } from 'antd'

export default class Bar extends Component {
  render() {
    return (
      <>
        <Card>
          <Button type='primary'>更新</Button>
        </Card>
        <Card title="柱状图">
        <div className="bar" id='bar' style={{height: '400px', width: '100%'}}></div>
        </Card>
      </>
    )
  }

  componentDidMount() {
    const myChart = echarts.init(document.getElementById('bar'))
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    })
    window.addEventListener("resize", function () {
      myChart.resize();
  });
  }
}
