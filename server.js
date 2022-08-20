require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const FocusTodosRoutes = require('./routes/focusTodos')
const UserRoutes = require('./routes/user')

//express app
const focusBuddy = express()

//middleware
focusBuddy.use(express.json())
focusBuddy.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
focusBuddy.use('/api/focustodos', FocusTodosRoutes)
focusBuddy.use('/api/user', UserRoutes)


//connect DB
mongoose.connect(process.env.MONGO_URL)
.then(() => {
//listen
focusBuddy.listen(process.env.PORT, () => {
    console.log(`connected and listening on ${process.env.PORT}`);
})
})
.catch((err) => {
    console.log(err);
})

