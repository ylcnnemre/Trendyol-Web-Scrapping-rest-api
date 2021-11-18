const express=require("express")
const dotenv=require("dotenv")
const app=express()
const getProduct=require("./getData")
const router=require("./routes/PhoneRoute")
app.use("/phone",router)

dotenv.config()
app.listen(process.env.PORT || 5000)