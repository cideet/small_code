var postsData = require('../../../data/posts_data.js');

Page({

  onColletionTap: function (event) {
    // var game = wx.getStorageSync('key11');  //获取同步缓存
    // wx.removeStorageSync('key11');  //删除同步缓存
    // wx.clearStorageSync();  //清除所有缓存
    // console.log(game);
    console.log(1);
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.currentPostid];
    postCollected = !postCollected;
    postsCollected[this.data.currentPostid] = postCollected;
    this.showModel(postsCollected, postCollected);
    // this.showToast(postsCollected, postCollected);
  },

  showModel: function (postsCollected, postCollected) {
    var _this = this;
    wx.showModal({
      title: '收藏',
      content: postCollected ? '收藏该文章？' : '取消收藏？',
      showCancel: 'true',
      concelText: '取消',
      cancelColor: '#333',
      confirmText: '确定',
      confirmColor: 'red',
      success: function (res) {
        if (res.confirm) {
          wx.setStorageSync('posts_collected', postsCollected);
          _this.setData({
            collected: postCollected
          });
        }
      }
    });
  },

  showToast: function (postsCollected, postCollected){
    wx.setStorageSync('posts_collected', postsCollected);
    this.setData({
      collected: postCollected
    });
    wx.showToast({
      title: postCollected ? '收藏成功' : '取消成功',
      duration: 1000,
      icon: 'success'  //或loading
    });
  },

  onShareTap: function (event) {

  },

  /**
   * 页面的初始数据
   */
  data: {
    postData: {},
    currentPostid: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postid = options.id;
    this.data.currentPostid = postid;
    var postData = postsData.postList[postid];
    this.setData({
      postData: postData
    });
    console.log(this.data.postData);
    // wx.setStorageSync('key11', '张三丰丰');  //设置同步缓存
    // wx.setStorageSync('key11', {  //修改同步缓存
    //   game: '撸呀撸',
    //   developer: '暴雪'
    // });
    var postsCollected = wx.getStorageSync('posts_collected');
    console.log(postsCollected);
    if (postsCollected) {
      var postCollected = postsCollected[postid];
      this.setData({
        collected: postCollected
      });
    } else {
      var postsCollected = {};
      postsCollected[postid] = false;
      wx.setStorageSync('posts_collected', postsCollected);
    }

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