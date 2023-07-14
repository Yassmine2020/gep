const axios = require('axios');
const apiToken = process.env.API_TOKEN;

export default async function fetchHouseDevices(req, res) {
  const houseName = req.query.houseName;

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    // url: 'http://192.168.100.244:8080/devman/devicelist?house=sunimplant',
    url: `http://192.168.100.244:8080/devman/devicelist?house=${houseName}`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: apiToken,
    },
  };

  axios
    .request(config)
    .then((response) => {
      const data = response.data;
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
}
