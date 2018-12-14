const rp = require('request-promise');
const $ = require('cheerio');
const url1 = "https://www.flipkart.com/search?as=off&as-show=on&otracker=start&page="
const url2 = "&q=mobiles&viewType=list"

let allMobiles = [];

async function getMobiles(){  
    let mobilesArray;   
    let html; 
    for (let i = 0; i < 1; i++) {
        let url = url1 + i + url2;
        html = await rp(url);
        mobilesArray = $("div._1-2Iqu", html);
    }
    for (let i=0;i<mobilesArray.length;i++) {
        console.log(i, $("div._3wU53n", mobilesArray[i]).text());
    }
}
getMobiles();
function mobilesArray(){

}