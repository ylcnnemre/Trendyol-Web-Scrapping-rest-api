const express=require("express")
const app=express()
const getProduct=require("./getData")
const router=require("./routes/PhoneRoute")
app.use("/phone",router)

app.listen(3000)