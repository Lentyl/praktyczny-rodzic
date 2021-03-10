const Comments = require('../models/comments.model');
const Message = require('../models/message.model');
const Article = require('../models/article.model');

function loginAdminRouter(app) {



    const password = process.env.loginPasword;
    let login = process.env.login;



    

   app.get('/api/post', async (req, res) => {

         await Article.find()
            .then(ArticleList => res.json(ArticleList))
            .catch(err => res.status(400).json('Error: ' + err)) 

    }) 


    app.post('/login', (req, res) => {

        const passwordSt = req.body.permission.passwordSt
        const loginSt = req.body.permission.loginSt


        if (password === passwordSt && login === loginSt) {


            res.json({
                permission: true
            })
        } else {

            res.json({
                permission: false
            })
        }

    })



    app.get('/admin/messages', (req, res) => {

        Message.find()
            .then(commentsList => res.json(commentsList))
            .catch(err => res.status(400).json('Error: ' + err))

    })

    app.delete('/admin/messages', (req, res) => {

        Message.findByIdAndDelete(req.body.id)
            .then(() => res.json('Exersise deleted. '))
            .catch(err => res.status(400).json('Error: ' + err))

    })


    app.post('/admin/add-article', (req, res) => {



        let route = 'article/';

        route += req.body.title;

        console.log(route);

        const article = new Article({
            title: req.body.title,
            inscriptionContent: req.body.article,
            route
        })
        article.save(req.body.id)
            .then(() => res.json('Article added. '))
            .catch(err => res.status(400).json('Error: ' + err))


    })

    app.get('/admin/confirm-comments', (req, res) => {

        Comments.find()
            .then(commentsList => res.json(commentsList))
            .catch(err => res.status(400).json('Error: ' + err))

    })



    app.delete('/admin/confirm-comments', (req, res) => {

        Comments.findByIdAndDelete(req.body.id)
            .then(() => res.json(`Exersise deleted.`))
            .catch(err => res.status(400).json('Error: ' + err))

    })

    app.put('/admin/confirm-comments', (req, res) => {

        Comments.updateOne({
                _id: req.body.id
            }, {
                $set: {
                    confirmed: true,
                }
            })
            .then(() => res.json(`confirmed!`))
            .catch(err => res.status(400).json('Error: ' + err))

    })


    app.get('/article/:title', (req, res) => {


        Comments.find()
            .then(commentsList => res.json(commentsList))
            .catch(err => res.status(400).json('Error: ' + err))

    })





}

module.exports = loginAdminRouter;