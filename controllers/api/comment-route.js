const router = require('express').Router();
const Comment = require('../../models/Comment');
const User = require('../../models/User');
const post = require('../../models/Project');
const withAuth = require('../../utils/auth');

router.get('/', async (req,res)=>{
    try{
        const comments = await Comment.findAll(
            {
                name:req.body.name,
                commentData:req.body.commentData,
    });
    req.session.save(()=>{

    })
    }catch (err) {
        res.status(400).json(err);
    } 
});
module.exports = router;