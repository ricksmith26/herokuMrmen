const apiRouter = require('express').Router();
const twitRouter = require('./twitter');
const watsonRouter = require('./watson')

apiRouter.use('/twitter', twitRouter);
// apiRouter.use("/watson", watsonRouter);

module.exports = apiRouter;
