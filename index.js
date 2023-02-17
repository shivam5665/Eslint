const app = require("express")

app.get("/eslint",(req,res)=>{
    res.send("Eslint")
})

app.listen(3400,()=>{
    console.log("Runningon 3400")
})