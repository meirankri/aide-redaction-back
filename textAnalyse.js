"use strict";
const { TextAnalyticsClient, CognitiveServicesCredential } = require("@azure/cognitiveservices-textanalytics");
const key = '0b3bc1f3d0144b5789405efee782ec66';
const endpoint = `https://westcentralus.api.cognitive.microsoft.com/text/analytics`;
const creds = new CognitiveServicesCredential.ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } });
const textAnalyticsClient = new TextAnalyticsAPIClient.TextAnalyticsClient(creds, endpoint);
async function keyPhraseExtraction(client){

    console.log("2. This will extract key phrases from the sentences.");
    const keyPhrasesInput = {
        documents: [
            { language: "fr", id: "1", text: `Il était évident pour moi, qu’après ma formation j’ouvrirais ma propre entreprise de plomberie à Paris.
            Il ne me resté plus qu’à trouver un petit atelier capable de m’accueillir avec tous les outils qu’un plombier honnête pouvait transporter. Surtout un atelier avec un loyer abordable pour un jeune plombier chauffagiste sortit tout droit de l’école.
            Après mon installation, le lendemain pour être précis, à 8h10 du matin, soit 10 minutes après l’ouverture de la plomberie, le premier client est apparu, je devrais dire la première cliente plutôt. C’était une dame d’un certain âge, complètement désemparée car elle avait par mégarde cassé le robinet de la chasse d’eau de ses toilettes en voulant le fermer. Ce qui a occasionné une inondation dans ses toilettes. Le temps que la pauvre dame trouve le robinet principal pour fermer le compteur d’arrivé d’eau, les toilettes s’étaient transformée en une vraie petite pataugeoire à canard. Provoquant ainsi un dégât des eaux chez le voisin du dessous.
            Pour le coup, j’ai compatis au problème de plomberie de cette dame, en notant son adresse pour aller réparer sa fuite de robinet de toilette, qui aurait pu finir en catastrophe avec une inondation collective dans l’immeuble. Le temps d’enfiler mon gilet d’artisan plombier et de fermer la porte de la boutique. Les tuyaux en plomb de la dame ne m’ont pas facilité la tâche, car les soudures en plomberie sur le plomb, croyez-moi ce n’est pas simple! Il faut avoir une certaine dextérité et une grande patience car le plomb fond très vite et à température beaucoup moins élevée que les baguettes qui servent à souder le cuivre. Donc si on chauffe de trop, c’est tout le tuyau qui fond. Après avoir exécuté 
            la réparation de la fuite d’eau et le changement du robinet d’arrêt, j’ai donné un coup de main à la dame pour nettoyer les dégâts occasionnés par l’eau.` }
            
        ]
    };

    const keyPhraseResult = await client.keyPhrases({
        multiLanguageBatchInput: keyPhrasesInput
    });
    console.log(keyPhraseResult.documents);
    console.log(os.EOL);
}
keyPhraseExtraction(textAnalyticsClient);