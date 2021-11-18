const router=require("express").Router()
const getProduct= require("../getData")

router.get("/",(req,res)=>{
    let query=req.query.brand.toLowerCase()

    let prod=getProduct(query)
  console.log(prod)
   Promise.all(prod).then((val)=>{
       let fullProd=[]
        
       if(val[0].status==false)
        {
            res.status(404).json({status :false ,msg: "wrong parameter"})
        }
       else if(val[0].status==undefined)
        {
            val.map((value)=>{
            
                value.map((el)=>{
                    fullProd.push(el)
                })
          })
          res.status(200).json(fullProd)
        }
        
      
      
     
   })
})

module.exports=router