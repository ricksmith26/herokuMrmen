const Twit = require('twit');
const fs = require('fs');
const { consumer_key, consumer_secret, access_token, access_token_secret } =
  process.env.NODE_ENV === 'production'
    ? process.env
    : require('../config/twitConfig');

const T = new Twit({
  consumer_key: consumer_key,
  consumer_secret: consumer_secret,
  access_token: access_token,
  access_token_secret: access_token_secret
});

const getTweets = (req, res, next) => {
  T.get(
    'statuses/user_timeline',
    { screen_name: req.params.twitter_username, count: 10 },
    (err, data, response) => {
      // if there no errors
      if (!err) {
        let twitterPost = data.statuses;
        //this will be where the tweets are pushed into array
        let arrOfTexts = [];
        data.forEach(function(tweet) {
          arrOfTexts.push(tweet.text);
        });
        console.log(arrOfTexts);
      }
    }
  );
};

module.exports = { getTweets };
