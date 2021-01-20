
const keys = require("../config/keys");
const fetch = require('node-fetch');

const auth = keys.pexelsAPIkey;
const url = "https://api.pexels.com/v1/search?query=nature&per_page=10";

module.exports = (app) => {
    app.get('/api/landingdata', async (req, res) => {
        try {
            let landingData = [];
            await fetch(url, {
                headers: {
                    Authorization: keys.pexelsAPIKey
                }
            })
            .then(resp => {
                return resp.json()
            }).then(data => {
                data.photos.forEach(element => {
                   // console.log(element.url);
                    landingData.push(element.url);
                });
                //console.log(data.photos[0].url);
                //landingData.push(data.photos[0].url);
                
            });
            
            res.send(landingData);
            
        } catch (err) {
            res.status(418).send(err);
        }
    });

   
  
  };