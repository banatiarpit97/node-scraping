const puppeteer = require('puppeteer');
const fs = require('fs');
const yargs = require('yargs');
let tutorialLink;
titleOptions = {
    describe: 'URL of tutorial',
    demand: true,
    alias: 'u'
}
if(!yargs.argv["url"]){
    console.log("please specify the url of tutorial to be downloaded");
}else{
    tutorialLink = yargs.argv["url"];    
    let baseURL = "https://www.tutorialspoint.com/";
    (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(tutorialLink, { waitUntil: 'networkidle2' });
            let anchors = await page.$$("ul.nav.nav-list.primary.left-menu li a");
            let nameElement = await page.$$(".content h1");
            let folderName = await page.evaluate((name) => {
                return name.innerHTML;
            }, nameElement[0])
            console.log(`creating folder ${folderName} to store pdfs of tutorial`);        
            fs.mkdirSync(`./${folderName}`);
            for(let i=0;i<anchors.length;i++){  
                try{
                    let title = await page.evaluate((link) => {
                        return link.innerHTML;
                    }, anchors[i])
                    let link = await page.evaluate((link) => {
                        return link.getAttribute('href');
                    }, anchors[i])
                    let pg = await browser.newPage();
                    console.log(`downloading pdf ${i+1} of ${anchors.length} (${title})...`);
                    await pg.goto(baseURL + link, { waitUntil: 'networkidle2' });
                    await pg.pdf({ path: `./${folderName}/${i+1}.${title}.pdf`, format: 'A4' })
                    await pg.close();
                }
                catch(e){
                    console.log('error downloading the pdf', e)
                }
                
            }
            await browser.close();
        
    })();
}