const express = require('express');
const router = express.Router();
const { createEmail } = require('../controllers/email-controller');
const auth = require('../middlewares/auth');

router.post('/', auth, createEmail);

module.exports = router;
