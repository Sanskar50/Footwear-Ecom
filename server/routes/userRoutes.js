const express = require('express')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const router = express.Router()

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET-KEY, { expiresIn: '3d' })
}

// login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// signup route
router.post('/signup', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.signup(email, password)
        res.status(200).json({ email, user })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router