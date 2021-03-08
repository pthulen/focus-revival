# Focus Revival App Readme

## Overview
Focus Revival is a task tracking application to help users follow their daily and weekly todos. 
Users are able to sign in via Google Oauth then input their daily and weekly tasks. Users inputs are persistent and saved in a MongoDB database on AWS servers. Completed tasks are marked by the user and removed from the lists. 

On larger screens, logged in users are greeted with random inspirational quotes fetched from [Zenquotes.io API](www.zenquotes.io). 

A variety of landscape photos are used for the background and fetched from the [Pexels API](https://www.pexels.com/api/). 

View the live application [here](https://www.focusrevival.com)

## Setup

In order to run the project locally, copy the files to your local machine by entering the following command into your terminal. 

```bash
git clone https://github.com/pthulen/tasktracker
```

Then enter the following command in the terminal to install the dependencies. 

```bash
npm install
```
You may then run the following command to bring up a development version of the frontend. 

```bash
npm run dev
```
In order to have a fully functional development environment a Mongo DB Atlas Database needs to be setup. They offer an excellent free tier [here](https://www.mongodb.com/cloud/atlas). Once the database is spun up the connection URI needs to be added to the project so the backend can communicate with the DB to store User logins and User tasks. The URI should be saved in an object in a file called Dev.js. This file needs to be created and should not be included in a public respository. This file should be located similar to the path below. 
```bash
config/dev.js
```
Once the database is setup you will need to register the app with [Google](https://console.cloud.google.com) in order to use their Oauth. This can be done at Once you register and generate credentials, update the Dev.js file with the new google credentials. Make sure the correct URL and redirect URL are listed on the application page. 

## License
[MIT](https://choosealicense.com/licenses/mit/)


## Acknowledgments

This project was inspired by the Momentum chrome extension. 
