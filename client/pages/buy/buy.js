// pages/buy/buy.js
var shop_config = require('../game_config/config_shop');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    BuyNum: "",
    OwnGold: "889",
    AllPrice: "",
  },

  /* 获取玩家输入的购买数量 */

  bindKeyInput: function (e) {
    //console.log(e.detail.value);
    this.setData({
      BuyNum: e.detail.value
    });
    /*    AllPrice = BuyNum*1.0; */
  },


  /** 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options);
   // console.log(shop_config)
    //console.log(shop_config[options.id]);
    this.setData({
      item: shop_config[options.id]
    });
 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    /*     price1 = price*1.0;
        console.log(price1); */
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})