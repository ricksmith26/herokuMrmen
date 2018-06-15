const DB = require('../db/index');
const Twit = require('twit');
const fs = require('fs');
const { consumer_key, consumer_secret, access_token, access_token_secret } =
  process.env.NODE_ENV === 'production'
    ? process.env
    : require('../config/twitConfig');
const tone = require('./watson');

const T = new Twit({
  consumer_key: consumer_key,
  consumer_secret: consumer_secret,
  access_token: access_token,
  access_token_secret: access_token_secret
});

const getTweets = (req, res, next) => {
  let emotionObj = { score: 0 };
  let languageObj = { score: 0 };
  let socialObj = { score: 0 };
  T.get(
    'statuses/user_timeline',
    { screen_name: req.params.twitter_username, count: 1 },
    (err, data, response) => {
      // if there no errors
      if (!err) {
        let twitterPost = data.statuses;
        //this will be where the tweets are pushed into array
        let arrOfTexts = [];
        data.forEach(function(tweet) {
          arrOfTexts.push(tweet.text);
        });
        tone(arrOfTexts.join(''))
          .then(result => {
            console.log(result);

            result = JSON.parse(result);
            result.document_tone.tone_categories[0].tones.forEach(
              emotion => {
                if (emotion.score > emotionObj.score) {
                  emotionObj = emotion;
                }
              }
            );
            result.document_tone.tone_categories[1].tones.forEach(
              language => {
                if (language.score > languageObj.score) {
                  languageObj = language;
                }
              }
            );
            result.document_tone.tone_categories[2].tones.forEach(
              social => {
                if (social.score > socialObj.score) {
                  socialObj = social;
                }
              }
            );
            //  res.send(result.tone_categories)
            // console.log(emotionObj.tone_name);
            return DB.many('SELECT * FROM men WHERE emotion = $1;', [
              emotionObj.tone_name
            ]);
          })
          .then(men => {
            console.log(men[0]);
            res.send(men[0]);
          })
          .catch(next);
      }
    }
  );
};

module.exports = { getTweets };
