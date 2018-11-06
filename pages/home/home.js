// pages/home/home.js
//获取应用实例
const app = getApp()
// app.globalData.count+= 2
// console.log(getApp().globalData.count)
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    circular:true,
    interval: 2000,
    duration: 500,
    activeText: [
      {label: '活动时间', msg: '2018-11-01'},
      { label: '活动地点', msg: '越秀区流花路' },
      { label: '主办单位', msg: '暂无' }
    ],
    listText: [
      { 
        src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        msg: '安卓开发者论坛'
      },
      {
        src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        msg: '安卓开发者论坛'
      },
      {
        src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        msg: '安卓开发者论坛'
      }
    ]
  }
})