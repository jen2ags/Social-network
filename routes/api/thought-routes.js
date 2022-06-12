const router = require('express').Router();
const { 
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought, 
    deleteThought, 
    createReaction, 
    deleteReaction 
} = require('../../controllers/thought-controller');

// GET and POST thoughts
router
.route('/')
.get(getAllThoughts)
.post(createThought);

//set up GET one, PUT, and DELETE thoughts by id
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// POST reactions
router
.route('/:thoughtId/reactions/')
.post(createReaction)

//DELETE reactions
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;