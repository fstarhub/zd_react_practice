import React, { Component } from 'react'

import AMapLoader from '@amap/amap-jsapi-loader';

import './index.less'

export default class Home extends Component {
  constructor() {
    super()
    this.map = {}
  }
  render() {
    return (
      // <div className='welcomePage'>
      //   <span className='welcomeTitle'>欢迎使用洋码头</span>
      // </div>
      <div id="container">
        
      </div>
    )
  }

  componentDidMount() {
    this.init()
  }

  init = () => {
    AMapLoader.load({
      "key": "b887f33e10afd70e5e0384535705a3ac",              // 申请好的Web端开发者Key，首次调用 load 时必填
      "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    }).then((AMap)=>{
      this.map = new AMap.Map('container', {
        zoom:11,//级别
        center: [116.397428, 39.90923],//中心点坐标
        viewMode: '2D',  //设置地图模式
        lang:'zh_cn',  //设置地图语言类型
      });
    }).catch(e => {
        console.log(e);
    })
  }
}
