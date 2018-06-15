const twitRouter = require('express').Router();
const { getTweets } = require('../controllers/twitter');

twitRouter.route('/home').get((req, res, next) => {
  console.log('######')
  res.render('pages/result')
})

twitRouter.route('/:twitter_username').get(getTweets);

module.exports = twitRouter;
