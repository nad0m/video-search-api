const fetch = require('node-fetch');
const KEY = process.env.KEY;
const BASE_URL = process.env.BASE_URL;


module.exports = getData = (term, res) => {
  const url = new URL(BASE_URL)
  url.searchParams.append('part', 'snippet')
  url.searchParams.append('maxResults', 10)
  url.searchParams.append('key', KEY)
  url.searchParams.append('q', term.q)

  fetch(url.href).then(response => response.json()).then(json => res.send(json)).catch(e => console.log(e))
}

