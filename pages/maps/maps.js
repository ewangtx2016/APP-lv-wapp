const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    maptitle: 'maptitle',
    log:null,
    lat:null,
    marks:[],
    cengji: 13
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    this.mapCtx = wx.createMapContext('lvmap',this)
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        var mymark = {
          id: 1,
          latitude: latitude,
          longitude: longitude,
          title: '中心',
          tel: '176000234234',
          add: '北京朝阳区建国门'
        }
        app.globalData.marks.push(mymark)
        _this.setData({
          log: longitude,
          lat: latitude,
          marks: app.globalData.marks
        })

        console.log(mymark)

      }
    })
  },
  /**
   * 地图减号
  */
  jian: function(){
    this.data.cengji--
    this.setData({
      cengji: this.data.cengji
    })
  },

  jia: function(){
    this.data.cengji++
    this.setData({
      cengji: this.data.cengji
    })
  },

  getMap: function(e){
    wx.getSetting({
      success: function (authSetting){
        if (authSetting.authSetting['scope.userInfo']){

        }else{
          
        }
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
  onShareAppMessage: function () {
    
  }
})