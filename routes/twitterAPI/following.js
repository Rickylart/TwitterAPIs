require('dotenv').config();
const fetch = require('node-fetch');
var express = require('express');
var router = express.Router();
const got = require('got');

router.use('/',function(req, res){
    let userID = req.body.userid;

    if(!typeof userID === 'undefined' || userID === null){
    
        res.status(400);
        res.write(JSON.stringify("userID Can't be Empty"));
        return  res.end();
       }
       else{

        fetch(` https://api.twitter.com/2/users/${userID}/following`,{
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              "Authorization":process.env.BEARER_TOKEN,
              "iuacDrnFE8KjgjBautWojN71t": process.env.API_KEY_SECRET
               }
          })
        .then(response=>{
          //  console.log("res1",res)
            return response.text();
        })
        .then(response=>{
            console.log("res2",JSON.stringify(response));
            res.status(200);
            res.write(response);
            return  res.end();
        })
        .catch(error=>{
            console.log("Exception : ",error);
        });
        
       }
});

module.exports=router;