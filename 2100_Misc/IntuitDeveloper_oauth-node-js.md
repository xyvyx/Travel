---
title: IntuitDeveloper/oauth-node-js
updated: 2016-12-27 08:21:36Z
created: 2016-12-27 08:21:36Z
source: https://github.com/IntuitDeveloper/oauth-node-js
tags:
  - SI
---

# [(L)](https://github.com/IntuitDeveloper/oauth-node-js#node-js-sample-app-for-oauth)NODE JS Sample App for OAuth

#

Welcome to the Intuit Developer's Node JS OAuth Sample App.
This sample app is meant to provide a working example of oAuth management.
OAuth Management APIs consists of the following:

- Intuit OAuth Service URLs - URLs to use to access Intuit OAuth Services.
- Request token URL - Request token endpoint to retrieve request token and secret

- Access token URL - Access token endpoint to retrieve access token and secret
- Authorize URL - To authorize access to the third party app

This is not a seed project to be taken cart blanche and deployed to your production environment. Certain concerns are not addressed at all in our samples (e.g. security, privacy, scalability). In our sample apps, we strive to strike a balance between clarity, maintainability, and performance where we can. However, clarity is ultimately the most important quality in a sample app.

## [(L)](https://github.com/IntuitDeveloper/oauth-node-js#table-of-contents)Table of Contents

- [Prerequisites](https://github.com/IntuitDeveloper/oauth-node-js#prerequisites)
- [Configuration](https://github.com/IntuitDeveloper/oauth-node-js#configuration)
- [Dependencies](https://github.com/IntuitDeveloper/oauth-node-js#dependencies)
- [First Use Instructions](https://github.com/IntuitDeveloper/oauth-node-js#first-use-instructions)
- [Running the app](https://github.com/IntuitDeveloper/oauth-node-js#running-the-app)
- [Project Structure](https://github.com/IntuitDeveloper/oauth-node-js#project-structure)
- [Routes](https://github.com/IntuitDeveloper/oauth-node-js#routes)
- [Sequence Diagram](https://github.com/IntuitDeveloper/oauth-node-js#sequence-diagram)
- [Http Emit](https://github.com/IntuitDeveloper/oauth-node-js#http-emit)
- [SSL Emit](https://github.com/IntuitDeveloper/oauth-node-js#ssl-emit)
- [Watch & Learn](https://github.com/IntuitDeveloper/oauth-node-js#watch--learn)
- [Contributing to the Repository](https://github.com/IntuitDeveloper/oauth-node-js#contributing-to-the-repository)

## [(L)](https://github.com/IntuitDeveloper/oauth-node-js#prerequisites)Prerequisites

1. [![Alt text](../_resources/require.jpg)](https://github.com/IntuitDeveloper/oauth-node-js/blob/master/images/require.jpg)

2. [Developer](https://developer.intuit.com/,%22Developer%20Account%22) account

3. An app on [Developer](https://developer.intuit.com/,%22Developer%20Account%22) and the associated app token, consumer key, and consumer secret.

## [(L)](https://github.com/IntuitDeveloper/oauth-node-js#configuration)Configuration

- Navigate to **node_modules\app\config.js** to update the config.

[![Alt text](../_resources/config.jpg)](https://github.com/IntuitDeveloper/oauth-node-js/blob/master/images/config.jpg)

## [(L)](https://github.com/IntuitDeveloper/oauth-node-js#dependencies)Dependencies

[![Alt text](../_resources/depend.JPG.jpg)](https://github.com/IntuitDeveloper/oauth-node-js/blob/master/images/depend.JPG)

## [(L)](https://github.com/IntuitDeveloper/oauth-node-js#first-use-instructions)First Use Instructions:

- Clone the GitHub repo to your workspace

**Note:** This sample is used for understanding how oauth works

- Configure the app tokens: Go to your app on developer.intuit.com and copy the OAuth Consumer Key and OAuth Consumer Token from the keys tab. Add these values to the file **node_modules\app\config.js** in our oauth-node folder.
- Make sure you specify a port which is not used.
- Run **npm install** to make sure all the dependencies are installed from package.json

## [(L)](https://github.com/IntuitDeveloper/oauth-node-js#running-the-app)Running the app

Once the sample app code is on your computer, follow the steps below to run the app:

- Run the command **node app.js**
- Go to Browser > **localhost:3001** > Enter
- Connect your app to Quickbooks, by clicking on Connect to QuickBooks button and follow the instructions on the screen.
- After successfully connecting the app to QuickBooks.
- You should be in a position to view the access token and access secret.

**Refer : Watch and Learn**

## [(L)](https://github.com/IntuitDeveloper/oauth-node-js#project-structure)Project structure

[![Alt text](../_resources/project.JPG.jpg)](https://github.com/IntuitDeveloper/oauth-node-js/blob/master/images/project.JPG)

## [(L)](https://github.com/IntuitDeveloper/oauth-node-js#routes)Routes

[![Alt text](../_resources/routes.JPG.jpg)](https://github.com/IntuitDeveloper/oauth-node-js/blob/master/images/routes.JPG)

## [(L)](https://github.com/IntuitDeveloper/oauth-node-js#sequence-diagram)Sequence Diagram

- The following sequence diagram should help you understand the oauth handshake sequence.

[![Alt text](../_resources/seq.png)](https://github.com/IntuitDeveloper/oauth-node-js/blob/master/images/seq.png)

- Layman understanding of quickbooks oauth mystery revealed.

[![Alt text](../_resources/qbauth.png)](https://github.com/IntuitDeveloper/oauth-node-js/blob/master/images/qbauth.png)

## [(L)](https://github.com/IntuitDeveloper/oauth-node-js#http-emit)Http Emit

- Http request from top-down view from fiddler. Please observe the **Protocol | Host | URL** section.

[![Alt text](../_resources/fiddle.JPG.jpg)](https://github.com/IntuitDeveloper/oauth-node-js/blob/master/images/fiddle.JPG)

## [(L)](https://github.com/IntuitDeveloper/oauth-node-js#ssl-emit)SSL Emit

- Make sure you have your port **443** open for SSL handshake to commit to intuit server. Please observe the undergoing SSL handshake from the application layer in network monitor.

[![Alt text](../_resources/ssl.JPG.jpg)](https://github.com/IntuitDeveloper/oauth-node-js/blob/master/images/ssl.JPG)

## [(L)](https://github.com/IntuitDeveloper/oauth-node-js#watch--learn)Watch & Learn

[![Alt text](../_resources/authorize.JPG.jpg)](https://www.youtube.com/watch?feature=player_embedded&v=r1GUrXfHbB0)

## [(L)](https://github.com/IntuitDeveloper/oauth-node-js#contributing-to-the-repository)Contributing to the Repository

If you find any issues or opportunities for improving this respository, fix them! Feel free to contribute to this project by [forking](http://help.github.com/fork-a-repo/) this repository and make changes to the content. Once you've made your changes, share them back with the community by sending a pull request. Please see [How to send pull requests](http://help.github.com/send-pull-requests/) for more information about contributing to Github projects. Please help in writing test cases to the Test Project.

## [(L)](https://github.com/IntuitDeveloper/oauth-node-js#reporting-issues)Reporting Issues

If you find any issues with this demo that you can't fix, feel free to report them in the issue section of this repository.