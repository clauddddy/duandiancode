const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({//从oneNet获取洗衣状态
      url: "https://api.heclouds.com/devices/643896642/datapoints",   //将请求行中的数字换成自己的设备ID
      header: {
        "api-key": "Yp99vqsIXnq4C8xkna21N=lQIQ0="                     //换成自己的api-key
      },
      data: {
        limit: 1
      },
      method: "GET",
      success: function (e) {
        console.log(e.data.data)
        that.setData({
       
          
          light: e.data.data.datastreams[1].datapoints[0].value,
        })
        app.globaldata=e.data.data.datastreams[1].datapoints[0].value
        console.log(app.globaldata)
       app.num=700
       
      }
    })
  
    
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
  gotoPage1: function()
  { wx.navigateTo({ url: '/pages/elec/elec', }) },
  onShareAppMessage: function () {
    
  },

  gotoPage2: function()
  { wx.navigateTo({ url: '/pages/light/light', }) },
  onShareAppMessage: function () {
    
  },

  gotoPage3: function()
  { wx.navigateTo({ url: '/pages/user/user', }) },
  onShareAppMessage: function () {
    
  },

  gotoPage4: function()
  { wx.navigateTo({ url: '/pages/logn/logn', }) },
  onShareAppMessage: function () {
    
  },

  getPhoneNumber(e){
    console.log(e);
  }
})


