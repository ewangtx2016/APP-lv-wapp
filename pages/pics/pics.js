const app = getApp()
Page({
  data: {
    picsText: '详情页面',
    thispage: 0
  },
  onLoad: function (options){
    this.data.thispage = options.page
    this.setData({
      thispage: this.data.thispage
    })
  }
})