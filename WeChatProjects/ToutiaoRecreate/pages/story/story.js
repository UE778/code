// pages/story/stories.js
const app = getApp()
Page({

  

  /**
   * Page initial data
   */
  data: {
    story:[],
    comments:[]
  },
//function for requesting story data
  getRequestData: function(res){
    console.log(res)
    this.setData({
      story:res.data
    })
  },
//function for requesting comment data
  getRequestData2: function(res){
    console.log(res)
    this.setData({
      comments: res.data.objects
    })
  },

  // function for deleting comments
  deleteComment(event) {
    let data = event.currentTarget.dataset;

    // make a DELETE request
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'DELETE',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API key from Above

      success() {
        // no need for response data
        // redirect to index page when done
        wx.redirectTo({
          url: '/pages/index/index'
        });
      },
    });

  },

  voteComment(event) {
    let page = this
    let data = event.currentTarget.dataset;
    let votes = data.votes;
    let new_votes = { votes: votes + 1 }

    // make a PUT request
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'PUT',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API key from Above
      data: new_votes,

      success(res) {
        let new_comment = res.data

        // all the page comments
        let comments = page.data.comments
      
        // find the comment from page comments to update based on unique id
        let comment = comments.find(comment => comment._id == new_comment.id)
      
        // update comment
        comment.votes = new_comment.votes
      
        // update the page comments
        page.setData({comments: comments})
      }
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  //request the comment via requestData function
  onLoad: function (options) {
    let page = this;
  //pass in the id info from index.js
    let id = options.id
    const request = {
      url:`https://cloud.minapp.com//oserve/v1/table/84988/record/${id}`,
      method: 'GET',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
      success: page.getRequestData
    }
    wx.request(request);
//request the comment via requestData2 function
    const commentRequest = {
      url:`https://cloud.minapp.com//oserve/v1/table/85188/record/`,
      method: 'GET',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
      data: {
        where: { // filtering comments for a specific story
          "story_id": { "$eq": id } // story id
        }
      },
      success: page.getRequestData2
    }
    wx.request(commentRequest);

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {


  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})