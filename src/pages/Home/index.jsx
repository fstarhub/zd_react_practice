/*
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2022-05-23 14:48:34
 * @LastEditors: fengshuai
 * @LastEditTime: 2022-09-01 14:34:01
 */
import React, { Component } from 'react'

import AMapLoader from '@amap/amap-jsapi-loader';
import { notification, Radio, Space } from 'antd';

import './index.less'

export default class Home extends Component {
  constructor() {
    super()
    this.map = {}
    this.infoWindow = {}
  }
  state = {
    selectValue: 1
  }
  render() {

    const { selectValue } = this.state
    return (
      // <div className='welcomePage'>
      //   <span className='welcomeTitle'>欢迎使用洋码头</span>
      // </div>
      <div className='containerBox'>
        <div id="container" onClick={this.clickMap}></div>
        <div className="info">
        <Radio.Group onChange={this.selectOnChange} value={selectValue}>
          <Space direction="vertical">
            <Radio value={1}>提示经纬度值</Radio>
            <Radio value={2}>获取当前行政区</Radio>
            <Radio value={3}>添加marker</Radio>
            <Radio value={4}>添加图层</Radio>
          </Space>
        </Radio.Group>
        </div>
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
        zoom:12,//级别
        center: [116.397428, 39.90923],//中心点坐标
        viewMode: '2D',  //设置地图模式
        lang:'zh_cn',  //设置地图语言类型
        isHotspot: true
      });
    }).catch(e => {
        console.log(e);
    })
  }

  selectOnChange = (e) => {
    // console.log(e.target.value)
    this.setState({selectValue: e.target.value})
    // this.map.on('moveend', this.moveMap)
  }

  clickMap = () => {
    this.map.on('click', this.showLangT)
    // this.map.on('moveend', this.moveMap)
  }
  showLangT = (e) => {
    // console.log(e)
    let text = '您在[' + e.lnglat.getLng()+','+e.lnglat.getLat() + ']的位置点击了地图!'
    notification.open({
      message: '经纬度信息',
      description: text,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  }

  moveMap = () => {
    this.map.getCity(function(info) {
      console.log(info);
    })
  }
}
