const request=require("request")
const cheerio=require("cheerio")


request("https://www.trendyol.com/cep-telefonu-x-c103498",(err,response,html)=>{

if(!err && response.statusCode==200)
{
   const $ = cheerio.load(html)
   
   let container=  $("#search-app > div > div.srch-rslt-cntnt > div.srch-prdcts-cntnr > div:nth-child(2) > div > div > div.p-card-chldrn-cntnr > a > div.prdct-desc-cntnr-wrppr")

    $(container).each((i,el)=>{

      let isim= $(el).children().first().children().first().children().last().text()
      console.log(isim)
    })
      
 
   }
})