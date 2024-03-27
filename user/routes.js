const express = require('express');
const router = express.Router();

const {userDataFun} = require('./userData')

router.get('/userData', async (req,res)=>{
    console.log("hiii")

    try{
  
    const userData = await userDataFun()
    res.status(200).json(userData);
    }
    catch(error) {
        res.status(500).json('server Error');
    }
    

})

module.exports = router;