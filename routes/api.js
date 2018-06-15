const apiRouter = require('express').Router();
const twitRouter = require('./twitter');
const watsonRouter = require('./watson')

apiRouter.use('/twitter', twitRouter);
// apiRouter.use("/watson", watsonRouter);

// apiRouter.route('/home')
// .get((req,res,next) => {
//   res.render('pages/results')
// })


module.exports = apiRouter;
