require('dotenv').config();
const fetch = require('node-fetch');
var express = require('express');
var router = express.Router();
const got = require('got');

router.use('/',function(req, res){

   var userID = req.body.username;

   //checking if the userID is an array
   if(Array.isArray(userID)){

    //loop through the userIDs
    // userID.forEach((element,index) => {
    //     console.log(element);
        
    //    pickUserID = element;

    //     return pickUserID;
    //    });

       console.log(userID);

    fetch(`https://api.twitter.com/2/users/by?usernames=${userID}`,{
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization":process.env.BEARER_TOKEN,
          "iuacDrnFE8KjgjBautWojN71t":process.env.API_KEY_SECRET
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
   else{
    res.status(400);
    res.write(JSON.stringify("Please send a vaild array data"));
    return  res.end();
   }

    // (async () => {
    //     try {
    //         var response = await got(`https://api.twitter.com/2/users/by/username/${username}`,
    //         {
    //             headers:{
    //                 "Authorization":"Bearer AAAAAAAAAAAAAAAAAAAAAJJUWAEAAAAAJ3buxe36tPsWjaFJWj9Gju37VpM%3DQoInR12MQNgWqWQMShINRbpE2WUEZ8yDG5Ow0DUdw3rbHRo9YO",
    //                 "iuacDrnFE8KjgjBautWojN71t":"BgwCS1L9UdtT3MjE6ikUNiw3qULga0XYzOBt07ZJL7w1GlaXEZ"
    //             },
    //         }
    //         );
    //          console.log(response.body);
    //          res.status(200);
    //          res.write(response.body);

    //         return res.end();
    //     } catch (error) {
    //         console.log(error);
    //          res.status(200).send(JSON.stringify(error));
    //         //=> 'Internal server error ...'
    //         return res.end();
    //     }
    // })();

});

module.exports = router;