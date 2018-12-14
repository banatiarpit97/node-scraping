const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.google.co.in/';

puppeteer
    .launch()
    .then(function (browser) {
        return browser.newPage();
    })
    .then(function (page) {
        return page.goto(url).then(function () {
            console.log('elem')
            page.$('.gb_P').then((elem) => {    //returns handle not element
                page.evaluate((btn) => {return btn.innerText}, elem).then((txt) => {
                    console.log(txt)
                })
            })
            // return page.content();
        });
    })
    // .then(function (html) {
    //     $('h2', html).each(function () {
    //         console.log($(this).text());
    //     });
    // })
    .catch(function (err) {
    });