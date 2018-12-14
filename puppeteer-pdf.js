const puppeteer = require('puppeteer');
// const devices = require('puppeteer/DeviceDescriptors');
// const iPhone = devices['iPhone 6'];
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({width:1400, height:760})    //will set size of browser window and site will be displayed according to that
    // await page.emulate(iPhone);

    await page.goto('https://arpit-banati.firebaseapp.com/#/projects', { waitUntil: 'networkidle2' });
    // await page.goto('https://www.tutorialspoint.com/amazon_web_services/amazon_web_services_elastic_compute_cloud.htm', { waitUntil: 'networkidle2' });
    await page.waitFor(1000);
    await page.screenshot({ path: 'hn.png', fullPage:true});    //fullPage prop takes ss of complete page, not only the visible part
    // await page.pdf({ path: 'hn.pdf', format: 'A4' });

    await browser.close();
})();