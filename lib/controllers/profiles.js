const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  const profile = { id: '', name: 'Test User', quote: 'N/A' };
  res.send(profile);
});
