const apiRouter = require('express').Router();
const twitRouter = require('./twitter');
const {getTweets} = require('../controllers/twitter')


apiRouter.use('/twitter', twitRouter);


apiRouter.route('/home')
  .get((req,res,next) => {
   
    res.render('pages/home-mr-men')
  })
  .post(getTweets)


module.exports = apiRouter;
