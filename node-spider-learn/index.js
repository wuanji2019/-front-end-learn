const express = require("express");
const app = express();
let server = app.listen(3000,() => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(server.address())
    console.log('Your App is running at http://%s:%s', host, port);
})

app.get('/', (req,res,next) => {
    res.send(hotNews)
})

const superagent = require('superagent');
let hotNews = [];
let localNews = [];
superagent.get('https://s.weibo.com/top/summary').end((err,res) => {
    if(err) {
        console.log(`热点抓取失败 - ${err}`)
    } else {
        hotNews = getHotNews(res)
    }
})

/*
* [description] - 抓取热点新闻页面
*/
const cherrio = require("cheerio");

let getHotNews = (res) => {
    let hotNews = [];
    let $ =cherrio.load(res.text);
  $('div#pl_top_realtimehot table tbody tr .td-02').each((idx, ele) => {
    let news = {
      title: $(ele).children("a").text(),        // 获取新闻标题
      href: $(ele).children("a").attr('href'),    // 获取新闻网页链接
      Number: $(ele).children("span").text(),        // 获取新闻
    };
    hotNews.push(news)              // 存入最终结果数组
  });
  return hotNews
    
}