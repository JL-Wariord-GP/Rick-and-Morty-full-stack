const router = require('express').Router()

const commentServices = require('./comments.services')

//? Este es el prefijo: /comment

router.get('/', commentServices.getAllComments)
router.post('/', commentServices.postComment)

router.get('/:id', commentServices.getCommentById)
router.delete('/:id', commentServices.deleteComment)
router.patch('/:id', commentServices.patchComment)
//router.put('/:id')

module.exports = router