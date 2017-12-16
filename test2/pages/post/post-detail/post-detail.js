var postsData = require('../../../data/posts_data.js');

Page({

  onCollectionTap: function (event) {
    var game = wx.getStorageSync('key11');  //获取同步缓存
    console.log(game);
  },

  onShareTap:function(event){
    wx.removeStorageSync('key11');  //删除同步缓存
    wx.clearStorageSync();  //清除所有缓存
  },

  /**
   * 页面的初始数据
   */
  data: {
    postData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postid = options.id;
    var postData = postsData.postList[postid];
    this.setData({
      postData: postData
    });
    console.log(this.data.postData);
    // wx.setStorageSync('key11', '张三丰丰');  //设置同步缓存
    wx.setStorageSync('key11', {  //修改同步缓存
      game: '撸呀撸',
      developer: '暴雪'
    });
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

  }
})