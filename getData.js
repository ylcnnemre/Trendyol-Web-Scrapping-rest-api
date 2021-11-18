const request=require("request-promise")
const cheerio=require("cheerio")

 function getProduct(params)
{
  const brandList=
    {
      "samsung" : "https://www.trendyol.com/samsung-cep-telefonu-x-b794-c103498",
      "xiaomi" : "https://www.trendyol.com/xiaomi-cep-telefonu-x-b101939-c103498",
      "apple" : "https://www.trendyol.com/apple-cep-telefonu-x-b101470-c103498",

    }
    
   let searchQuery=brandList[params]
  

  let count=[1,2,3,4,5]
   let promise=[]
  count.map((val)=>{
    var prod= request(`${searchQuery}?pi=${val}`).then((response)=>{
      let products=[]
      const $=cheerio.load(response)
      let container=  $("#search-app > div > div.srch-rslt-cntnt > div.srch-prdcts-cntnr > div:nth-child(2) > div > div > div.p-card-chldrn-cntnr > a > div.prdct-desc-cntnr-wrppr")
   
       $(container).each((i,el)=>{
         let brand=$(el).children().first().children().first().children().first().text()
         let description= $(el).children().first().children().first().children().last().text()
   
         let price=$(el).children().last().children().first().children().last().text()
         let indirimli= $(el).children().last().children().first().children(".prc-box-orgnl").text()
   
         let sepetİndirim=$(el).children().last().children().last().children().first().children().last().text()
         
   
         products.push({
           marka : brand,
           desc: description,
           price :price,
           ind : indirimli == "" ? "indirim yok" : indirimli,
           sepet : sepetİndirim
       })
   
       })
      return products
       
   }).catch((err)=>{
     console.log("merhabaaaaaaaaaaaaaaaaaaaaaaa")
     return {
       status : false,
        msg : "yanlış istekte bulundunuz"
     }
   })
   promise.push(prod)
  })
    
  
   return promise
}


module.exports=getProduct