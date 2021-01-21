
const keys = require("../config/keys");
const fetch = require('node-fetch');

const auth = keys.pexelsAPIkey;
const url = "https://api.pexels.com/v1/search?query=mountains&per_page=10";

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
                    landingData.push(element.src.original);
                });
                
            });
            
            res.send(landingData);
            
        } catch (err) {
            res.status(418).send(err);
        }
    });

   
  
  };