// pages/light/light.js
//<button class="bt_2" bindtap='init' >查看<btton>
Page({
  data:{
    lightening:[],  //这是一个空的数组，等下获取到云数据库的数据将存放在其中
},
onPullDownRefresh:function()

{
wx.showNavigationBarLoading() //在标题栏中显示加载

//模拟加载

setTimeout(function()

{
// complete

wx.hideNavigationBarLoading() //完成停止加载

wx.stopPullDownRefresh() //停止下拉刷新

},1500);

},
  /**
   * 页面的初始数据
   */
  


  /**
   * 生命周期函数--监听页面加载
   */
  init: function () {
    var that = this
    wx.request({//从oneNet获取光照强度
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
      }
    });
   },
  onLoad: function (options) {
    var that=this;
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
      }
    });
    },
    
  
 /*
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
  onShareAppMessage: function () {

  },
  one:function(e){
    console.log(e)

  }
})