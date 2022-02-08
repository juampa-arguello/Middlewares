const express = require('express');
const router = express.Router();
const {main} = require('../controllers/mainController');
const userEntry = require('../middlewares/userEntry');

router.get('/', main);

router.get('/register', (req, res) => {
    res.send('Entraste en register')
})
router.get('/login', (req, res) => {
    res.send('Entraste en login')
})

router.get('/admin', userEntry, (req,res) => {
    res.send('Hola admin: ' + req.query.user)
})

module.exports = router;