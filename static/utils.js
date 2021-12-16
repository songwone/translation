/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-12-15 20:57:52
 * @LastEditors: songone
 * @LastEditTime: 2021-12-16 15:42:14
 */
window.$utils = {
  getContent: function () {
    return localStorage.getItem("_content")
  },
  setContent: function (val) {
    return localStorage.setItem("_content", val)
  },
  removeContent: function () {
    return localStorage.removeItem("_content")
  },
  jsonp: function(url,data,callback){
            
    var fnName = 'myJsonp_' + Math.random().toString().replace('.','');
    
    //定义一个全局回调函数
    window[fnName] = callback;
    
    //初始化序列化参数
    var querystring = '';

    for(var attr in data){

        querystring += attr + '=' + data[attr] + '&';

    }
    //动态创建script标签
    var script = document.createElement('script');
    
    //后台接受回调函数，并调用
    script.src = url + '?' + querystring + 'callback=' + fnName;
    
    //处理完毕之后,删除script标签，否则多次请求，页面会存在多个script标签
    // script.onload = function(){    
    // document.body.removeChild(script);

    // }
    
    document.body.appendChild(script);
}
}