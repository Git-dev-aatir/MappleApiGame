const express = require('express');
const router = express.Router();
const { getMissions, completeMission } = require('../controllers/missionController');
const auth = require('../middleware/authMiddleware');

router.get('/', getMissions);
router.post('/complete', auth, completeMission);

module.exports = router;
