const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/',async(req,res)=>{
    const {amount,percentagetip}=req.body
    if(typeof amount !=='number'|| amount <=0){
        return res.status(400).json({error:'positive value enter the Amount'})
    }
    else if(typeof percentagetip !== 'number' || percentagetip < 0 || percentagetip >100){
        return res.status(400).json({ error: 'Percentage tip value Minimum 0 to maxmum 100' });
    }
    const tip=(amount * percentagetip)/100
    const total=tip+amount

    res.json({tip,total})
})
app.listen(5000,'127.0.0.1',()=>{
    console.log('this portal server is work')
})