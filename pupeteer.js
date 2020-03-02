const puppeteer = require('puppeteer');
const urls = require('./google-search')
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
    await delay(2000);
    
   }
  
  await browser.close();
}
 scrape()