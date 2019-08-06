const express = require('express');
const router  = express.Router();
const Project = require('../models/Project');
const Task    = require('../models/Task');
const uploadMagic = require('../config/cloudinary');

/* GET home page */
router.get('/', (req, res, next) => {
  // this route is actualy localhost:3000/api/projects 
//  because of the preface i put on this routes file in app.js
  Project.find().populate('tasks')
  .then((allTheProjects)=>{
    res.json(allTheProjects);
  })
  .catch((err)=>{
    res.json(err);
  })
});



  router.get('/details/:id', (req, res, next)=>{
    Project.findById(req.params.id).populate('tasks')
    .then((singleProject)=>{
      res.json(singleProject);
    })
    .catch((err)=>{
      res.json(err);
    })

  })



  router.post('/', uploadMagic.single('theImageParameter') ,(req, res, next)=>{

    let theImage;

    if(req.file){
      theImage = req.file.url
    } else{
      theImage = 'http://getwallpapers.com/wallpaper/full/e/1/2/41252.jpg'
    }



    Project.create({
      title: req.body.theTitle,
      description: req.body.theDescription,
      tasks: [],
      owner: req.user._id,
      image: theImage
    })
    .then((singleProject)=>{
      res.json(singleProject);
    })
    .catch((err)=>{
      res.json(err);
    })


  })

  router.post('/update/:id', uploadMagic.single('theImageParameter'), (req, res, next)=>{

    let theUpdate = {};
    theUpdate.title = req.body.theTitle;
    theUpdate.description = req.body.theDescription

    if(req.file){
      theUpdate.image = req.file.url
    }

    Project.findByIdAndUpdate(req.params.id, theUpdate)
    .then((singleProject)=>{
      res.json(singleProject);
    })
    .catch((err)=>{
      res.json(err);
    })
  })


  router.delete('/:id', (req, res, next)=>{

    Project.findById(req.params.id)
    .then((theProject)=>{


      theProject.tasks.forEach(eachTaskID => {
        Task.findByIdAndRemove(eachTaskID)
      })


      Project.findByIdAndRemove(theProject._id)
      .then((singleProject)=>{
        res.json(singleProject);
      })
      .catch((err)=>{
        res.json(err);
      })
  

    })
    .catch((err)=>{
      res.json(err);
    })

  })



module.exports = router;
