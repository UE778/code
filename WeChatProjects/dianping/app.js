//app.js
App({
  onLaunch: function() {
    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login, wx.getUserInfo, wx.requestPayment)

    let clientID = 'cee12fe132caffd96d58'  // 应用名称: 岩燕因私出入境服务上海有限公司' first MiniApp
    wx.BaaS.init(clientID);

  wx.BaaS.auth.loginWithWechat().then(user => {
      this.globalData.userInfo = user;
      //storing data in phone cache immediately wx.setStorageSync('keyName', stoerd data)
      wx.setStorageSync('userInfo', user);
      console.log('logged in from app.js', user)
      // user 包含用户完整信息，详见下方描述
    }, err => {
      console.log('fail login');
      // **err 有两种情况**：用户拒绝授权，HError 对象上会包含基本用户信息：id、openid、unionid；其他类型的错误，如网络断开、请求超时等，将返回 HError 对象（详情见下方注解）
  })
},
globalData:{
  //retreive info from storage, if no storage, null
  userInfo: wx.getStorageSync('userInfo') || null,
}
// ...
})