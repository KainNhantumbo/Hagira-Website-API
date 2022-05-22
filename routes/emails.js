const express = require('express');
const router = express.Router();
const { createEmail } = require('../controllers/email-controller');

router.post('/', createEmail);

module.exports = router;
