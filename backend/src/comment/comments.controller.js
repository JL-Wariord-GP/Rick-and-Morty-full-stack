const uuid = require('uuid')
const Comments = require('../models/comments.models')

const getAllComments = async () => {
    //? Select * from Comment;
    const data = await Comments.findAll() //? Trae todas los comentarios
    return data
}

const creatComment = async (data) => {
    const newComment= await Comments.create({
        id: uuid.v4(),
        character: data.character,
        firstName: data.firstName,
        comment: data.comment
    })
    return newComment
}


creatComment({
    character: 'Naruto',
    firstName: 'Jorge Gomez',
    comment: 'En la vida siempre podemos hacer lo que queramos'
})
 

const getCommentById = async (id) => {
    const data = await Comments.findOne({
        where:{
            id: id
        }
    });
    //? Select * from Comment where id = id
    return data //? Si el where no encuentra nada retorna null
}

const editComment = async (id, data) => {
    const response = await Comments.update(data, {
        where:{
            id: id
        }
    })
    return response
} 

const deleteComment = async (id) => {
    const data = await Comments.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    getAllComments,
    getCommentById,
    creatComment,
    editComment,
    deleteComment
}

