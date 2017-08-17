let express = require("express");
let rosterRouter = express.Router();

let Roster = require("../models/roster.js");

rosterRouter.get("/", (req,res) =>{
Roster.find(req.query, (err,data)=>{
    if(err){
        res.status(500).send({"message": "Error within server", err});
    } else{
        res.status(200).send({"message": "Success here is data", data});
    }
});
});

rosterRouter.post('/', (req, res) =>{
    let newRoster = new Roster(req.body);
    newRoster.save((err,data) =>{
        if(err){
        res.status(500).send({"message": "Error within server", err});
        } else {
        res.status(201).send({"message": "Item was created", data})
        }
    });
});

rosterRouter.get("/:id", (req, res) =>{
    Roster.findOne({"_id": req.params.id}, (err, data) =>{
        if(err){
            res.status(500).send({"message": "Error within server", err});
        } else if(data === null){
            res.status(404).send({"message": "Not Found", err});
        } else {
            res.status(200).send({"message": "Success here is data", data});
        }
    });
});

rosterRouter.put("/:id", (req, res) =>{
    Roster.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) =>{
        if(err){
            res.status(500).send({"message": "Error within server", err});
        } else if(data === null){
            res.status(404).send({"message": "Not Found", err});
        } else{
            res.status(200).send({"message": "Update success", data});
        }
    });
});

rosterRouter.delete("/:id", (req, res) =>{
    Roster.findByIdAndRemove(req.params.id, (err, data) =>{
        if(err){
            res.status(500).send({"message": "Error within server"});
        } else if(data === null){
            res.status(404).send({"message": "Not found"});
        } else {
            res.status(200).send({"message": "Delete success"});
        }
    })
})

module.exports = rosterRouter;