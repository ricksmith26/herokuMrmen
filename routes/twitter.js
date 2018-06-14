const twitRouter = require('express').Router();
const { getTweets } = require('../controllers/twitter');

twitRouter.route('/:twitter_username').get(getTweets);

module.exports = twitRouter;
