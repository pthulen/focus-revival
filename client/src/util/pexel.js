const keys = require("../../../config/keys");
const auth = keys.pexelsAPIkey;
const url = "https://api.pexels.com/v1/search?query=nature&per_page=1";

//pexelsAPIKey
//clientID: keys.googleClientID

export const fetchBackground = () => {
    fetch(url, {
        headers: {
            Authorization: auth
        }
    })
    .then(resp => {
        return resp.json()
    }).then(data => {
        return data.photos[0].url
    })
}
