const express = require('express')
const router = express.Router()

router.get('/a',(req,res)=>{
  res.send(req.body)
})

module.exports = router;
