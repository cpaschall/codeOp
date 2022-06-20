const router = require('express').Router();
const Comment = require('../../models/Comment');
const User = require('../../models/User');
const project = require('../../models/Project');
const withAuth = require('../../utils/helpers');


//Get all comments
router.get("/", async (req, res) => {
    try{
     const commentData = await Comment.findAll({
      attributes:['id','commentData','user_id','profile_id']
     });
     res.status(200).json(commentData);
    }catch(err){
      res.status(400).json(err);
    }
});

router.post('/', withAuth, async (req,res) =>{
    try {
        if (req.session){
            const commentPost = await Comment.create({
                commentData: req.body.commentData,
                project_id: req.body.project_id,
                user_id: req.body.user_id
            })
            res.status(200).json(commentPost);
        } 

    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;