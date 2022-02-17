const express=require('express')
const bodyParser = require('body-parser');
const app=express()

 const PORT =process.env.PORT || 5000
 app.use(bodyParser.json());

 

//  app.use(express.static('public'))

 app.post('/api/data',(req,res)=>{
    const fs = require('fs');
    const path = require('path');
    console.log(req.body)
    res.send("data stored in student.json file");
    fs.writeFileSync(path.resolve(__dirname, 'student.json'), JSON.stringify(req.body.post));
 })
 app.listen(PORT,()=>{console.log(`listening to port ${PORT}`)})
