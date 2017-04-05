# Emotional Tweets

## Goals

1. Create a RESTful API that uses Twitter and IMB Watson to deliver personality insights and translations of a Twitter user's tweets.
2. Become comfortable using 3rd party APIs (such as [Twitter's](https://dev.twitter.com/rest/public)
and [IBM Watson's](https://developer.ibm.com/watson/)).
3. Continue to work with the [Async library](https://caolan.github.io/async/)
4. Gain a better understanding of async in general as it relates to programming in JS.
5. Continue to use [underscore](www.underscorejs.org) to manipulate the data
you receive back from 3rd party APIs
6. Understand that servers can communicate with other servers too - it doesn't have to be client/server.

## Instructions

1. Sign up to both Twitter's and IBM Watson's APIs. Create a 30 day free trial with IMB Bluemix. Spend some time reading about how they work, especially IMB Watson.

2. Make authenticated requests, using Postman, to each of the APIs

3. Read up on how, once you've successfully made a request via Postman,
you can get hold of JS code that makes those requests for you (for use in
your own code)

4. Use the npm `twit` package to connect to Twitter from your server. See if you can send a tweet or get some tweet data to check you are connected correctly.

5. Use the npm package `watson-developer-cloud` to connect to IMB Watson's Personality Insights module from your server. Play around and see what you do with it. See if you can send it some tweets to analyse.

6. Build out your API, thinking carefully about how you might make your endpoints RESTful. Aim to implement at least the following routes:

  - a route that receives a Twitter username and returns the Big 5 personality insights for that username based on an analysis of their tweets
  - a route that translates a user's tweets from one language to another

Feel free to go further and explore what IMB Watson is capable of. It also has modules that work with images and analyse them, which could be fun.

## Some ideas for further development

* Cache the results in a MongoDB database (i.e. if an
identical request to your API has already been made, retrieve the results
from a MongoDB database)

* Build a front end for this application. Think about what kind of a UI you would need. On Thursday afternoon you will learn how to build a route that serves static assets such as an `index.html` file, css files and images so that you can serve your own front end application from the same server, as you would need to do in production.

* Examples of previous students work
  * Use graphs to display information about a user's personality.
  * Use twilio to text username and then text back top 5 traits.
  * Which dictator your tweets relate most to.
  * How close your personality is to one of your friends.
  * A website that takes a twitter handle, get's their last tweet and converts it into a audio file translated into another language.

This sprint is open-ended and is designed to make you:
1. Get creative and try to think of what you achieve with these tools.
2. To read through documentation and try to work out how to piece different apis together to achieve a desired outcome.

We will not so much have a solution lecture for this Sprint but more a show and tell which is great practice for the project presentations. Bouncing ideas off each other is pretty imperative for this sprint so it is essential to work in pairs!

Most importantly, Have fun!