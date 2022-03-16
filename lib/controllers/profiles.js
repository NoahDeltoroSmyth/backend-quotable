const { Router } = require('express');
const ProfileService = require('../services/ProfileService');
const Profile = require('../models/Profile');

module.exports = Router().post('/', async (req, res, next) => {
  const profile = await Profile.insert({ ...req.body, quote: 'N/A' });
  console.log('profile', profile);
  res.send(profile);
});
