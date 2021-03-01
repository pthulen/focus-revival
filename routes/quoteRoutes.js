const fetch = require('node-fetch');

module.exports = (app) => {
    app.get('/api/quote', async (req, res) => {
        try {
            
            let quote  = await fetch("https://zenquotes.io/api/random")
            .then(response => {
              return response.json();
            })
           
            res.send(quote);
            
        } catch (err) {
            res.status(400).send(err);
        }
    });

   
  
  };
