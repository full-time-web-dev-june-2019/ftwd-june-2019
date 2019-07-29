const express = require('express');

const router = express.Router();

const Task = require('../models/Task');

const Project = require('../models/Project');



    router.get('/details/:id', (req, res, next)=>{
        Task.findById(req.params.id)
        .then((theTask)=>{
            res.json(theTask)
        })
        .catch((err)=>{
            res.json(err);
        })
    })


    router.post('/', (req, res, next)=>{

        let projectID = req.body.theProject;

        Task.create({
            title: req.body.theTitle,
            description: req.body.theDescription
        })
        .then((theTask)=>{ 
            Project.findByIdAndUpdate(projectID, {
                $push: {tasks: theTask._id}
            })
            .then((response)=>{
                res.json({response, theTask})
            })
            .catch((err)=>{
                res.json(err)
            })
        })
        .catch((err)=>{
            res.json(err);
        })

    })




    router.post('/update/:id', (req, res, next)=>{

        Task.findByIdAndUpdate(req.params.id, {
            title: req.body.theTitle,
            description: req.body.theDescription
        })
        .then((response)=>{
            res.json(response)
        })
        .catch((err)=>{
            res.json(err)
        })


    })

    router.delete('/:id', (req, res, next)=>{

        Task.findByIdAndRemove(req.params.id)
        .then((response)=>{
            res.json(response)
        })
        .catch((err)=>{
            res.json(err)
        })
    })










module.exports = router;