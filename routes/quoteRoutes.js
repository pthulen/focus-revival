const fetch = require('node-fetch');

module.exports = (app) => {
    app.get('/api/quote', async (req, res) => {
        try {
            let quoteData = [];
            await fetch("https://type.fit/api/quotes")
            .then(response => {
              return response.json();
            })
            .then(data => {
                data.forEach(element => {
                    quoteData.push(element);
                });
            });
            res.send(quoteData);
            
        } catch (err) {
            res.status(418).send(err);
        }
    });

   
  
  };
