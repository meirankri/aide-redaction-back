const axios = require('axios')


// data = {
//     "documents": [
//         {
//             "language": "fr",
//             "id": "1",
//             "text": `ous devez disposer des documents JSON dans ce format : ID, texte, langue
//             La taille des documents doit être égale ou inférieure à 5 120 caractères par document, et vous pouvez avoir jusqu’à 1 000 éléments (ID) par collection.
//              La collection est soumise dans le corps de la demande. L’exemple suivant illustre le contenu qui peut être soumis pour extraction d’expressions clés.`
//         }
//     ]
// }
let data = (text)=>{
    return {
        "documents": [
            {
                "language": "fr",
                "id": "1",
                "text": text
            }
        ]
    }
    
}
const header = {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key":"0b3bc1f3d0144b5789405efee782ec66",
    "Accept":"application/json"
}
module.exports.textAnalyse = (text)=>{
    return axios.post("https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.1/keyPhrases", data(text), {
    headers: header
  })
  .then(function (response) {

    const motsCle =  response.data.documents[0].keyPhrases
    //console.log("success",motsCle)

    return motsCle

  })

  .catch(function (error) {
    console.log("erreur",error);
    return error
  });
}