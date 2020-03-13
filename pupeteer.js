const puppeteer = require('puppeteer');
const urls = require('./google-search')
const replaceText = require('./replaceText')
const textAnalyse = require('./azure/textAnalyse')

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}
let scrape = async () => {
  const browser = await puppeteer.launch({headless:true});
  const page = await browser.newPage();
  

  for(let url in urls){
    await page.goto(urls[url])
    //await delay(2000);
    let pageWithoutTag =   replaceText.pageReplace( await page.content())
    //remove all the html tags
    var regex = /(<([^>]+)>)/ig
    let cleanText = pageWithoutTag.replace(regex,'').trim()
    let keyword = []
    let textDivideBy5000 = cleanText.match(/.{1,5000}/g)
    textDivideBy5000.map((text)=>{
      keyword.push(textAnalyse.textAnalyse(text)) 
    })
    console.log(keyword[0])
    
   }
  
  await browser.close();
}
 scrape()