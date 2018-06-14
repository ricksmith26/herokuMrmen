const watsonConfig = require('../config/watsonConfig');

const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

const toneAnalyzer = new ToneAnalyzerV3({
  username: watsonConfig.username,
  password: watsonConfig.password,
  version: '2016-05-19',
  url: watsonConfig.url
});

const tone = (text) => {
  return new Promise((resolve, reject) => {
    toneAnalyzer.tone(
      {
        tone_input: text,
        content_type: 'text/plain'
      },
      (err, tone) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.stringify(tone, null, 2));
        }
      }
    );
  })

}
// tone("Greetings from Watson Developer Cloud!")
//   .then(console.log)
//   .catch(console.log);

module.exports = tone;