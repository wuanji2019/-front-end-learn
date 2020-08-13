/**
 * 全平台兼容的XMLHttpRequest对象 
 */
function getXHR(){
    var xhr = null;
    if(window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      try {
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) { 
          alert("您的浏览器暂不支持Ajax!");
        }
      }
    }
    return xhr;
}
  function ajax(url, method){
    var xhr = getXHR();
    xhr.onreadystatechange = function(){
        console.log('xhr.readyState:' + this.readyState);
    }
    xhr.onloadstart = function(){
        console.log('onloadStart');
    }
    xhr.onload = function(){
        console.log('onload');
    }
    xhr.open(method, url, true);
    xhr.setRequestHeader('Cache-Control',3600);
    xhr.send();
  }
  var timer = setTimeout(function(){
    console.log('setTimeout');
  },0);
  ajax('https://user-gold-cdn.xitu.io/2017/3/15/c6eacd7c2f4307f34cd45e93885d1cb6.png','GET');
  console.warn('这里的log并不是最先打印出来的.');