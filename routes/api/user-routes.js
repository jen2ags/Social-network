const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend
} = require('../../controllers/user-controller');

//set up GET all and POST at /api/users
router
.route('/')
.get(getAllUser)
.post(createUser);

//set up GET one, PUT, and DELETE at /api/users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

//set up POST and DELETE friend
router
.route('/:userId/friends/:friendId')
.post(createFriend)
.delete(deleteFriend)

module.exports = router;