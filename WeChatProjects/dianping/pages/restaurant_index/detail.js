// pages/restaurant_index/restaurant_index.js
const app = getApp();
Page({



  /**
   * Page initial data
   */
  data: {
    restaurant:{},
    comments:[],
   // review:[],
    ratings: [1,2,3,4,5],
    rating: ['click to rate'],
    currentUser:{}

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      currentUser: app.globalData.userInfo,
    });
    //click and show one restaurant
    let tableName = 'restaurants'
    let Restaurant = new wx.BaaS.TableObject(tableName)
    let recordID = options.id
    Restaurant.get(recordID).then((res)=> {
      console.log('detail_info', res)
      this.setData({
        restaurant: res.data
      })
    })

    //show the specific comment linked to the single restaurant
    let tableComments = 'comments'
    let Comments = new wx.BaaS.TableObject(tableComments)
    //sift through all comments to find ones with matched id
    //instatiate the query object
    let query = new wx.BaaS.Query()
    //apply criteria
    query.compare( 'restaurant_id', '=', recordID)
    //run the query
    Comments.setQuery(query).find().then((res)=> {
      console.log(res)
      this.setData({
        comments:res.data.objects
      })
    })
  },

    //submit review
    createReview: function(event){
      console.log('create review',event);
      const content = event.detail.content;
    }

      
    
    

  
  
  
    })