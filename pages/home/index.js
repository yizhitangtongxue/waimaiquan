// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  navToElmWaiMai() {
    wx.navigateToMiniProgram({
      appId: 'wxece3a9a4c82f58c9',
      path: 'pages/sharePid/web/index?scene=s.click.ele.me%2FHBsBpuu'
    })
  },  

  navToElmShangChao() {
    wx.navigateToMiniProgram({
      appId: 'wxece3a9a4c82f58c9',
      path: 'pages/sharePid/web/index?scene=s.click.ele.me%2FKo9vquu'
    })
  },
  
  navToMtWaiMai() {
    wx.navigateToMiniProgram({
      appId: 'wxde8ac0a21135c07d',
      path: '/index/pages/h5/h5?weburl=https%3a%2f%2fact.meituan.com%2fclover%2fpage%2fadunioncps%2fshare_coupon%3futmSource%3d42357%26utmMedium%3d49F46B5553FBAC6213B10D40C52353C2%26activity%3dOwMkGzn6oK'
    })
  },  
  
  navToMtShangChao() {
    wx.navigateToMiniProgram({
      appId: 'wxde8ac0a21135c07d',
      path: '/index/pages/h5/h5?weburl=https%3a%2f%2fact.meituan.com%2fclover%2fpage%2fadunioncps%2fshare_coupon%3futmSource%3d42357%26utmMedium%3d49F46B5553FBAC6213B10D40C52353C2%26activity%3dLj7hGmmCBO'
    })
  },

  navToMtYouhuiquan() {
    wx.navigateToMiniProgram({
      appId: 'wxde8ac0a21135c07d',
      path: '/index/pages/h5/h5?weburl=https%3a%2f%2fact.meituan.com%2fclover%2fpage%2fadunioncps%2fcoupon_shop%3futmSource%3d42357%26utmMedium%3d49F46B5553FBAC6213B10D40C52353C2%26activity%3d0AlN4OtEIa'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  onShareTimeline() {
    return {
      title:'快来领取饿了么美团商超红包券啦!!!',
      query:'/pages/home/index',
    }
  }
})