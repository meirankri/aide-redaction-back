const puppeteer = require('puppeteer');
const urls = require('./google-search')
const test = require('./replaceText')
function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}
let scrape = async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  

  for(let url in urls){
    await page.goto(urls[url])
    console.log(typeof await page.content())
    //await delay(2000);
    let pageWithoutTag =   test.pageReplace( await page.content())
    var regex = /(<([^>]+)>)/ig
    console.log(pageWithoutTag.replace(regex,''));
    
   }
  
  await browser.close();
}
 scrape()