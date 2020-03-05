//replace ce qui a entre certaine balise par rien

var str = `<script type>Bob</script>, 
I'm <b>20</b> years old, I like <footer>programming</footer>.`;

let replaceAll = [ ['<header','</header>'],['<footer','</footer>'],['<script','</script>'],['<nav','</nav>'],['<style','</style>'] ]
//let regex = new RegExp(`${b}(.*?)${bF}|<header>(.*?)</header>|<footer>(.*?)</footer>`,'g')

//pour utiliser une variable dans la regex, creer une instance de regex avec en 2 eme parametre les options

module.exports.pageReplace = (str)=>{
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

