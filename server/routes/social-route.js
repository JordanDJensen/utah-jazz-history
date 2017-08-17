let express = require("express");
let socialRouter = express.Router();

let Social = require("../models/social.js");

socialRouter.get("/", (req,res) =>{
    Social.find(req.query, (err, data) =>{
        if(err){
        res.status(500).send({"message": " Error within the server",err});
        }else {
            res.status(200).send({"message": " Success!", data});
        }
    });
});

socialRouter.post("/", (req, res) =>{
    let newSocial = new Social(req.body);
    console.log(newSocial)
    newSocial.save((err, data) =>{
        if(err){
            res.status(500).send({"message": " Error within the server", err});
        }else{
            res.status(201).send({"message": " Item was created", data})
        }
    });
});

socialRouter.get("/:id", (req, res) =>{
    Social.findOne({"_id": req.params.id}, (err, data) =>{
        if(err){
            res.status(500).send({"message": "Error within the server", err})
        } else if(data === null){
            res.status(404).send({"message": "Not found", err});
        } else {
            res.status(200).send({"message": "Success here is data", data})
        }
    });
});

socialRouter.put("/:id", (req, res) =>{
    Social.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) =>{
       if(err){
        res.status(500).send({"message": "Error within the server", err})
       }else if(data === null){
        res.status(404).send({"message": "Not found", err});
    } else {
        res.status(200).send({"message": "Update success", data})
    }
       
    }); 
});

socialRouter.delete("/:id", (req, res) =>{
    Social.findByIdAndRemove(req.params.id, (err, data) =>{
        if(err){
            res.status(500).send({"message": "Error within the server", err})
        } else if(data === null){
            res.status(404).send({"message": "Not found", err})
        } else{
            res.status(200).send({"message": "Delete success", data})
        }
    })
})

module.exports = socialRouter;