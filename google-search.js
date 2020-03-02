let axios  = require('axios')
let result = require('./json-result')

// axios.get('https://app.zenserp.com/api/v2/search?apikey=067a7200-54aa-11ea-ac6b-47cae1bc9925&q=plombier+paris&location=France&hl=fr&num=50')
// .then((response=>{
//   console.log(response.data)
// }))

let urls = []
result.organic.map((r,i) => {
  if(r.url != undefined && i<11) {
    urls.push(r.url)
  }
  

}
)
module.exports = urls

