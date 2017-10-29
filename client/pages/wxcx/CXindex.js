//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js');
Page({
  data: {
    actListjs: [{
      id: "0",
      time: "2017/10/02 17:00:00"
    },
    {
      id: "2",
      time: "2017/10/02 17:00:00"
    },
    {
      id: "3",
      time: "2017/10/02 17:00:00"
    },
    {
      id: "4",
      time: "2017/10/02 17:00:00"
    },
    {
      id: "5",
      time: "2017/10/02 17:00:00"
    },
    {
      id: "6",
      time: "2017/10/02 17:00:00"
    },
    {
      id: "7",
      time: "2017/10/02 17:00:00"
    },
    {
      id: "8",
      time: "2017/10/02 17:00:00"
    }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var time = util.formatTime(new Date());
    this.setData(
      {
        time: time
      }
    );
  }
})
