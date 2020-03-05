//replace ce qui a entre certaine balise par rien

var str = `<div class="cli-modal-backdrop cli-fade cli-popupbar-overlay"></div> <script type="application/ld+json">{
    "@context": "http://schema.org",
    "@type" : "LocalBusiness",
    "@id" : "parisplombier.paris",
    "name" : "Plombier Paris",
    "logo" : "https://parisplombier.paris/wp-content/themes/Parisplombier.paris/favicon.png",
    "telephone" : "(+33) 1 88 33 64 60",
    "email" : "contact@parisplombier.paris",
    "sameAs" : [ "https://www.facebook.com/Plombier-Paris-IDF-979596535518788/", "https://twitter.com/josephslva", "https://plus.google.com/117152349807018366812" ],
    "url" : "https://parisplombier.paris",
    "image" : "https://parisplombier.paris/wp-content/themes/Parisplombier.paris/images/logo.png",
    "priceRange" : "À partir de 109€",
    "openingHours": "Mo-Su 00:00-00:00",
    "description" : "Notre plombier à paris est prêt à vous aider 24/24h et 7/7j",
    "address" : {
      "@type" : "PostalAddress",
      "streetAddress" : "28 rue Nicolaï",
      "addressLocality" : "Paris",
      "postalCode" : "75012"
    },
    "geo" : {
      "@type" : "GeoCoordinates",
      "latitude" : "48.862725",
      "longitude" : "2.287592000000018"
    }
  }</script> <link rel="pingback" href="https://parisplombier.paris/xmlrpc.php"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">   <!--[if lt IE 9]>   <![endif]-->   </section></div></body></html>`;

let replaceAll = [ ['<header>','</header>'],['<footer>','</footer>'],['<b>','</b>'],['<script','</script>'] ]
//let regex = new RegExp(`${b}(.*?)${bF}|<header>(.*?)</header>|<footer>(.*?)</footer>`,'g')

//pour utiliser une variable dans la regex, creer une instance de regex avec en 2 eme parametre les options
pageReplace = (str)=>{
    var regexStr = []
    replaceAll.map((replace,i)=>{
        if(i === 0 ){
            regexStr.push(`${replace[0]}(.*?)${replace[1]}`)
        }else{
            regexStr.push(`|${replace[0]}(.*?)${replace[1]}`)
        }
        
    })
    //the flag s is important for the multiline search
    let regex = new RegExp(regexStr.join(''),'gs')
    
    
    return  str.replace(regex,'')
    
}
console.log(pageReplace(str));

