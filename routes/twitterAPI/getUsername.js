var express = require('express');
var router = express.Router();
const got = require('got');

router.use('/',function(res, req){

   // let username = trim(req.body.username);
   fetch("https://api.twitter.com/2/users/by/username/rickylart").then(
    async (response) => {
      const data = await response.json();
      res.status(200).send(JSON.stringify(data.body));
    });


    // (async () => {
    //     try {
    //         var response = await got.get(`https://api.twitter.com/2/users/by/username/rickylart`,
    //         {
    //             headers:{
    //                 "Authorization":"Bearer AAAAAAAAAAAAAAAAAAAAAJJUWAEAAAAAJ3buxe36tPsWjaFJWj9Gju37VpM%3DQoInR12MQNgWqWQMShINRbpE2WUEZ8yDG5Ow0DUdw3rbHRo9YO",
    //                 "iuacDrnFE8KjgjBautWojN71t":"BgwCS1L9UdtT3MjE6ikUNiw3qULga0XYzOBt07ZJL7w1GlaXEZ"
    //             },
    //         }
    //         );
    //          console.log(response.body);
    //     } catch (error) {
    //         console.log(error);
    //         //=> 'Internal server error ...'
    //     }
    // })();

});

module.exports = router;