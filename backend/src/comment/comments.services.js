const commentsControllers = require('./comments.controller')

const getAllComments = (req, res) => {
    commentsControllers.getAllComments()
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const postComment = (req, res) => {
    const data = req.body
    if (data.character && data.firstName && data.comment) {
        commentsControllers.creatComment(data)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
    } else {
        res.status(400).json({message: 'Missing Data'})
    }
}

const getCommentById = (req, res) => {
    const id = req.params.id;

    commentsControllers.getCommentById(id)
    .then(data => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({message: 'Invalid ID'})
        }
    })
    .catch(err => {
        res.status(404).json({message: err.massage})
    })
}

//? Modificacion parcial
const patchComment = (req, res) => {
    const id = req.params.id
    const {character, firstName, comment} = req.body;

    commentsControllers.editComment(id, {character, firstName, comment})
        .then(() => {
            if (response[0]) {
                res.status(200).json({
                    message: `Comment with id: ${id}, edited succesfully`
                })
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(error => {
            res.status(400).json({message: error.message})
        })
}

const putComment = (req, res) => {
    const id = req.params.id;
    const {character, firstName, comment} = req.body

    //? Este if es para validar los datos, y generar error si no vienen todos los necesarios
    if (character && firstName && comment) {
        commentsControllers.editComment(id,{character, firstName, comment})
        .then((response) => {
            //? Este if valida si una pelicula existe o no (Valid or Invalid ID)
            if (response[0]) {
                res.status(200).json({message: `Comment with ID: ${id}, edited succesfully!`})
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
    } else {
        res.status(400).json({message: 'Missing Data', fields: {
            character: 'string',
            firstName: 'string',
            comment: 'string',

        }})
    }
}

const deleteComment = (req, res) => {
    const id = req.params.id
    commentsControllers.deleteComment(id)
    .then((response) => {
        if (response) {
            res.status(204).json(response)
        } else {
            res.status(400).json({message: 'Invalid ID'})
        }
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}


module.exports = {
    getAllComments,
    getCommentById,
    postComment,
    patchComment,
    putComment,
    deleteComment
}