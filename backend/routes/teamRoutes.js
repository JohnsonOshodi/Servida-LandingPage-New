const express = require('express');
const router = express.Router();
const { getTeamMembers, addTeamMember, deleteTeamMember } = require('../controllers/teamController');

router.get('/', getTeamMembers);
router.post('/', addTeamMember);
router.delete('/:id', deleteTeamMember);

module.exports = router;
