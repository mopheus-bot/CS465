const express = require('express');     // Express app
const router = express.Router();        // Router logic

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

// define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET method routes tripsList
    .post(tripsController.tripsAddTrip); // POST Method Adds a Trip

// GET method routes tripsFindByCode - requires parameter
// PUT method routes tripsUpdateTrip - requires parameter
// DELETE method routes tripsDeleteTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip)
    .delete (tripsController.tripsDeleteByCode);

module.exports = router;