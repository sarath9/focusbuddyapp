const express = require('express')

//login

const loginUser = (req, res) => {
res.json({msg: 'user Login'})
}

//signup

const signupUser = (req, res) => {
res.json({msg: 'signup user'})
}

module.exports = {loginUser, signupUser}