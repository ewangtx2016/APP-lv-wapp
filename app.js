//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    marks: [
      { id: 1, latitude: 39.5219, longitude: 116.44355, title: "中心", tel: "4",add: "北京朝阳区建国门"},
      { id: 1, latitude: 39.9219, longitude: 116.64355, title: "中心1", tel: "555", add: "北京朝阳区建国门" },
      { id: 1, latitude: 39.9219, longitude: 116.34355, title: "中心2", tel: "6666666666", add: "北京朝阳区建国门" },
      { id: 1, latitude: 39.8219, longitude: 116.44355, title: "中心3", tel: "66666666", add: "北京朝阳区建国门" },
      { id: 1, latitude: 39.9119, longitude: 116.43355, title: "中心4", tel: "17602200234234", add: "北京朝阳区建国门" },
      { id: 1, latitude: 39.9219, longitude: 116.44355, title: "中心5", tel: "17226000234234", add: "北京朝阳区建国门" },
      { id: 1, latitude: 39.7219, longitude: 116.44355, title: "中心", tel: "17622000234234", add: "北京朝阳区建国门" },
      { id: 1, latitude: 39.2219, longitude: 116.44355, title: "中心", tel: "176022200234234", add: "北京朝阳区建国门" },
      { id: 1, latitude: 39.9519, longitude: 116.44355, title: "中心", tel: "176022200234234", add: "北京朝阳区建国门" },
      { id: 1, latitude: 39.9919, longitude: 116.44355, title: "中心", tel: "176044400234234", add: "北京朝阳区建国门" },
      { id: 1, latitude: 39.9319, longitude: 116.44355, title: "中心", tel: "176000234234", add: "北京朝阳区建国门" }
    ]
  }
})