//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    stories:[]
  },
//click the button and navigate to new page
  newPage(event) {
    let data = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/new/new`
    });
  },
//create a showStory function, which navigate to the story page
  showStory(event) {
    let data = event.currentTarget.dataset;
    let id = data.id;

    wx.navigateTo({
      url: `/pages/story/story?id=${id}`
    });
  },
//call the function when request responds success
  getRequestData: function(res){
    console.log(res)
    this.setData({
      stories:res.data.objects
    })
  },

  //handle the data that has been passed from response to handler called data
    setStories: function(data){
      let page = this;
      const stories = data.stories;
    },

  onLoad: function () {
    let page = this;
    const request = {
      url:"https://cloud.minapp.com//oserve/v1/table/84988/record/",
      method: 'GET',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
      success: page.getRequestData
    }
  
    wx.request(request);

   
    }
})
