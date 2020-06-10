const axios = require('axios');
const KEY = process.env.KEY;
const BASE_URL = process.env.BASE_URL;

const youtube = axios.create({
    baseURL: BASE_URL,
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
});

module.exports = getData = async (term) => {
    let data = null;
    try {
      data = await youtube.get('/search', {
        params: {
          part: 'snippet',
          maxResults: 10,
          key: KEY,
          ...term
        }
      });
    } catch(e) {
      console.log(e)
    }
    return data
}
