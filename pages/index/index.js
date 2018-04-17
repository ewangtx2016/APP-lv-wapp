/**
*CFA财经词典
**/

const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'CFA财经词典',
    autoplay: true,
    circular: true,
    iconis: true,
    iconcolor: '#ffffff',
    iconhovercolor: '#EE0F0F',
    current: 0,
    scrollid:1,
    photos: [
      {
        imgurl:'/images/banner.jpg',
        url: '/pages/pics/pics?page=132',
        title: 'banner1',
        id: 1
      },
      {
        imgurl: '/images/banner.jpg',
        url: '/pages/pics/pics?page=132',
        title: 'banner2',
        id: 2
      },
      {
        imgurl: '/images/banner.jpg',
        url: '/pages/pics/pics?page=132',
        title: 'banner3',
        id: 3
      }
    ],
    pics: [
      {
        id: 1,
        url: '/pages/pics/pics?page=132',
        title: '专注于高端金融培训，帮助学员实现提升自我专业能力的同时，开拓更多渠道帮助学员实习、就业'
      },
      {
        id: 2,
        url: '/pages/pics/pics?page=131',
        title: 'CFA&FRM+复旦金融专硕定向培养计划'
      },
      {
        id: 3,
        url: '/pages/pics/pics?page=132',
        title: 'CFA&FRM大学生卓越金融人才千人计划'
      },
      {
        id: 4,
        url: '/pages/pics/pics?page=133',
        title: '专注于高端金融培训，帮助学员实现提升自我专业能力的同时，开拓更多渠道帮助学员实习、就业'
      },
      {
        id: 5,
        url: '/pages/pics/pics?page=134',
        title: 'CFA&FRM+复旦金融专硕定向培养计划'
      },
      {
        id: 6,
        url: '/pages/pics/pics?page=136',
        title: 'CFA&FRM大学生卓越金融人才千人计划'
      }
    ]
  },
  clickimg: function(){
    let index = this.data.current
    let thisurl = this.data.photos[index].url
    wx.navigateTo({
      url: thisurl
    })
  },
  imgcheck: function(e){
    this.data.current = e.detail.current
  },
  inputclick: function(){
     wx.navigateTo({
       url: '/pages/search/search'
     })
  }
})