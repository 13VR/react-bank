const express = require('express')
const router = express.Router()

const { User } = require('../class/user')

router.post('/signup', function (req, res) {
  try {
    const { email, password, userId } = req.body
    if (!email || !password) {
      return res.status(400).json({
        message: 'Потрібно заповнити всі поля',
      })
    }
    let user = null
    console.log('user', userId)

    const newUser = User.create(email, password, id)
    return res.status(200).json({
      user: {
        id: newUser.id,
        email: newUser.email,
        password: newUser.password,
      },
    })
  } catch (e) {
    return res.status(400).json({
      message: e.message,
    })
  }
})
module.exports = router
