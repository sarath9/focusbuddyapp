const  express = require('express')
const User = require('../models/UserModel')

const routes = express.Router()

const {loginUser, signupUser} = require('../controllers/userController')

//login

routes.post('/login', loginUser)
routes.post('/signup', signupUser)

module.exports = routes
