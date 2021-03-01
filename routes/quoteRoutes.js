const fetch = require('node-fetch');

module.exports = (app) => {
    app.get('/api/quote', async (req, res) => {
        try {
            
            let quote  = await fetch("https://api.quotable.io/random?tags=technology,famous-quotes")
            .then(response => {
              return response.json();
            })
           
            res.send(quote);
            
        } catch (err) {
            res.status(400).send(err);
        }
    });

   
  
  };
