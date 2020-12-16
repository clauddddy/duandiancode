// pages/elec/elec.js
const app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    
  },
  init: function () {
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
      }
    });
  
  },
  onLoad: function (option) {
   // var situation;
    var that=this;
    var num=200;
   // console.log(app.situation),
    console.log(app.globaldata)
    console.log(app.num)
  
    
    wx.request({//从oneNet获取洗衣状态
      url: "https://api.heclouds.com/devices/643896642/datapoints",   //将请求行中的数字换成自己的设备ID
      header: {
        "api-key": "Yp99vqsIXnq4C8xkna21N=lQIQ0="                     //换成自己的api-key
      },
      data: {
        limit: 1,
        
    
      },
     
      method: "GET",
      success: function (e) {
        console.log(e.data.data)
        //console.log(app.globaldata)
        that.setData({
       
          
          light: e.data.data.datastreams[1].datapoints[0].value,
         

        })
        /* if(parseInt(app.globaldata)>=parseInt(num)){
        
          console.log("你需要断电"); 
          var situation="起床断电"
          console.log(situation);
          return situation;   
         Page({
            data:{
             situation="起床断电"
            }
          }) */
        
    
      }
    })
    

    {
      if(parseInt(app.globaldata)<=parseInt(app.num)){
       
        console.log("你需要断电"); 
        var situation1="还没断电！！快去断掉哦~~"
        
       console.log(situation1);  
        this.setData({
          situationnow:situation1
        })
        //return situation;  
      

        
        
      }else{
        var situation2="电已经断啦~安心睡觉觉吧";
        console.log(situation2);  
        this.setData({
          situationnow:situation2
        })
        //return situation;  
      };
    }
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

 
  
    
      

    
    
      //var unlight = 2
     
    
 
     /* that.setData({
        num:200,
       
        
      })*/  /*setnum(num){
         console.log(num)
        }, */
       
        /*
           if(parseInt(app.globaldata)>=parseInt(200)){
          console.log(success)
				 
					return null;
        }
        */
      

  
  /**
   * 生命周期函数--监听页面加载
   */
  

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
  onShareAppMessage: function () {

  },
/*aaa(){
  //if(light>250)
  
    that.setData({
      text1:"您未断电",
    })
}*/
})