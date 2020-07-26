// pages/profile/profile.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    currentUser: null
  },

  onLoad: function (
    
  ) {
  
    console.log('userData', app.globalData.userInfo)
  },

  userInfoHandler(data) {
    wx.BaaS.auth.loginWithWechat(data).then(user => {
      console.log('user',user);
      app.globalData.userInfo = user;
      this.setData({
        currentUser: user,
      })
        // user 包含用户完整信息，详见下方描述
      }, err => {
        // **err 有两种情况**：用户拒绝授权，HError 对象上会包含基本用户信息：id、openid、unionid；其他类型的错误，如网络断开、请求超时等，将返回 HError 对象（详情见下方注解）
    })
  },

  /**
   * Lifecycle function--Called when page load
   */


})