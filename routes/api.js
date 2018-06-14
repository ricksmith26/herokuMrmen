const apiRouter = require('express').Router();
const twitRouter = require('./twitter');

apiRouter.use('/twitter', twitRouter);

module.exports = apiRouter;
