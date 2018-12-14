const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
    .then(function (html) {
        allPresidents(html);
    })
    .catch(function (err) {
    });

async function allPresidents(html){
    const presidents = [];
    for (let i = 0; i < 3; i++) {
        // console.log(($('big > a', html)[i].attribs.href));
        let president = await presidentInfo($('big > a', html)[i].attribs.href);
        let presidentDetails = {};
        presidentDetails['name'] = $('.firstHeading', president).text();
        presidentDetails['DOB'] = $('.bday', president).text();
        presidents.push(presidentDetails);
    }
    console.log(presidents)

}

function presidentInfo(presidentURL){
    let url = "https://en.wikipedia.org"+presidentURL;
    return rp(url)
}