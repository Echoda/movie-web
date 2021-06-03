// 抓取豆瓣中的电影信息
const axios = require("axios").default;
const cheerio = require("cheerio");
const Movie = require("../models/Movie");
/**
 * 获取网页的源代码
 */
async function getMoviesHTML() {
    const resp = await axios.get("https://movie.douban.com/");
    return resp.data;
}

/**
 * 从网页中分析出movie的基本信息，然后得到详情页链接数组
 */
async function getMovieLinks() {
    const html = await getMoviesHTML();
    const $ = cheerio.load(html);
    const achorElements = $("#screening .ui-slide-content .poster a");

    const links = achorElements
        .map((i, ele) => {
            const href = ele.attribs["href"];
            return href;
        })
        .get();
    return links.slice(0, 20); // 取20个
}

/**
 * 根据详情页的地址，得到详细信息
 * @param {*} detailUrl
 */
async function getMovieDetail(detailUrl) {
  const resp = await axios.get(detailUrl);
  const $ = cheerio.load(resp.data);
  const name = $("h1").text().trim().split("\n")[0];
  const cover = $("#mainpic .nbgnbg img").attr("src");
  const star = $(".rating_self strong").text().trim();
  const desc = $(".related-info .indent span").text().trim();
  const spans = $("#info span.pl");
  const sortSpan = spans.filter((i, ele) => {
    return $(ele).text().includes("类型");
  });
  const countrySpan = spans.filter((i, ele) => {
    return $(ele).text().includes("制片国家");
  });
  const publishSpan = spans.filter((i, ele) => {
    return $(ele).text().includes("上映日期");
  });
  const sort = sortSpan.next("span").text().trim();
  const country = countrySpan[0].nextSibling.nodeValue.trim();
  const publishTime = publishSpan.next("span").text().trim();
  return {
    name,
    cover,
    star,
    desc,
    sort,
    country,
    publishTime,
  };
}

/**
 * 获取所有的书籍信息
 */
async function fetchAll() {
  const links = await getMovieLinks(); //得到书籍的详情页地址
  const proms = links.map((link) => {
    return getMovieDetail(link);
  });
//   const result = await Promise.all(proms);
//   console.log(result, 'result');
  return Promise.all(proms);
}

/**
 * 得到书籍信息，然后保存到数据库
 */
async function saveToDB() {
  const movies = await fetchAll();
  console.log(movies);
  await Movie.bulkCreate(movies);
  console.log("抓取数据并保存到了数据库");
}

// saveToDB();