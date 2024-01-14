const express=require('express')

const app=express()

const PORT= 5500;
app.get('/',(req,res)=>{
    res.send('this is Home Route')
})
app.get('/route',(req,res)=>{
    res.send('Route1 Page express is a Popular framework')
})
app.get('/route/:text',(req,res)=>{
    const {text}=req.params
    res.send(text)
})
app.post('/post',(req,res)=>{
    res.send("By Post Method")
})
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)

})