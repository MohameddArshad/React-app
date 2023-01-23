let exp = require('express');
let router= exp.Router();
let mongoose = require('mongoose');
let db = require('./schema');





//create
router.post('/',async function(req,res){
    let create = await new db({
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City,
    })
    let save = create.save();
    res.json(save)
    console.log(save)
})

//read

router.get('/',async function(req,res){
  let data = await db.find()
  res.json(data)
  
})

//Update
router.put('/',async function(req,res){
    let data = await db.updateOne({_id:req.body._id},{$set:{   
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City,
    }})

    res.json(data)
})


//Delete
router.delete('/:id',async function(req,res){
let dom = await db.findByIdAndDelete(req.params.id)
res.json(dom)
})


module.exports = router
