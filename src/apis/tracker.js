const fetch = require('node-fetch');

const ipify = 'https://api.ipify.org?format=json'
const geoIpLookup = 'https://json.geoiplookup.io/'

module.exports = tracker = (res) => {
  fetch(ipify)
    .then(response => response.json())
    .then(({ ip }) => {
      fetch(`${geoIpLookup}${ip}`)
        .then(geo => geo.json())
        .then(result => res.send(result))
        .catch(e => console.log(e))
    })
    .catch(e => console.log(e))
}
