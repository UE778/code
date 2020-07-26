//index.js
//获取应用实例
const app = getApp();
Page({
   data: {
     restaurants: []
   },

   showRestaurant(event){
     console.log('e', event);
     let id = event.currentTarget.dataset.id
     wx.navigateTo({
       url: `../restaurant_index/detail?id=${id}`,
     });
   },

  onLoad: function (options) {
    let tableName = 'restaurants'
    let Restaurants = new wx.BaaS.TableObject(tableName)
    Restaurants.find().then((res) => {
      console.log(res)
      this.setData({
        restaurants:res.data.objects
      })
    })
  }
})
