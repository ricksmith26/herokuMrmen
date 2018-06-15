const twitRouter = require('express').Router();
const { getTweets } = require('../controllers/twitter');

// twitRouter.route('/home').post((req, res, next) => {
//   console.log('######')
//   res.render('pages/home-mr-men')
// })

twitRouter.route('/:twitter_username').get(getTweets)

module.exports = twitRouter;
