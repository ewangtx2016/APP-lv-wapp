// pages/search/search.js
Page({
  /**
   * 页面的初始数据
   */
  closestatus(bool){
    this.data.closeStatus = bool
    this.setData({
      closeStatus: this.data.closeStatus
    })
  },
  data: {
    closeStatus: true,
    inputval: null
  },
  bindFocus:function(){
    this.data.closeStatus = false
    this.setData({
      closeStatus: this.data.closeStatus
    })
  },
  bindBlur:function(){
    if (this.data.inputval == null || this.data.inputval == '') {
      this.closestatus(true)
    }else{
      this.closestatus(false)
    }
  },
  bindInput:function(reponse){
    this.data.inputval = reponse.detail.value
    this.setData({
      inputval: this.data.inputval
    })
  },
  clearinput: function(){
    this.data.inputval = null
    this.setData({
      inputval: this.data.inputval
    })
    this.closestatus(true)
  }

})