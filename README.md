# small_code

test2 -> 制作项目启动页


wxa4a0433d833024a3

c30d8c5e4e3df2189ab7c64999f758e7

小程序官方文档： https://mp.weixin.qq.com/debug/wxadoc/dev/

知乎
zhuanlan.zhihu.com/oldtimes

只有text包裹的字体，在手机上才能长按选中

样式用rpx，不要用px

让设计师用750px做设计图

wx.setStorageSync('key11', '张三丰');  //设置同步缓存
wx.setStorageSync('key11', '张四丰');  //修改同步缓存
wx.getStorageSync('key11');  //获取同步缓存
wx.removeStorageSync('key11');  //删除同步缓存
wx.clearStorageSync();  //清除所有缓存


event.target -> 当前点击的组件
event.currentTarget -> 事件捕获的组件

restful API:
豆瓣API
微博API
github API 

wx.request({
  url: url,
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  header: {
    "Content-Type": "application/json11"
  },
  success: function (res) {
    that.processDoubanData(res.data, settedKey, categoryTitle)
  },
  fail: function (error) {
    // fail，比如断网
    console.log(error)
  },
  complete:function(){
    console.log('始终执行');
  }
})

