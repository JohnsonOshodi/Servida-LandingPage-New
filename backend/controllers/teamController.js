const Team = require('../models/teamMember'); 

// Get all team members
const getTeamMembers = async (req, res) => {
  try {
    const team = await Team.find(); 
    res.json(team);
  } catch (error) {
    console.error("Error fetching team members:", error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Add a new team member
const addTeamMember = async (req, res) => {
  try {
    const { name, position, photo } = req.body;
    const newMember = new Team({ name, position, photo }); 
    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    console.error("Error adding team member:", error);
    res.status(400).json({ error: 'Invalid data' });
  }
};

// Delete a team member
const deleteTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    await Team.findByIdAndDelete(id); 
    res.json({ message: 'Team member deleted' });
  } catch (error) {
    console.error("Error deleting team member:", error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getTeamMembers, addTeamMember, deleteTeamMember };


