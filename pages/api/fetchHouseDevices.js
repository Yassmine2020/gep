const axios = require('axios');

export default async function fetchHouseDevices(req, res) {
  const houseName = req.query.houseName;
  // const houseName = new URLSearchParams(req.url).get('houseName');

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    // url: 'http://192.168.100.244:8080/devman/devicelist?house=sunimplant',
    url: `http://192.168.100.244:8080/devman/devicelist?house=${houseName}`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZ3NicCIsInJvbGUiOiJlZGl0b3IiLCJleHAiOjE2ODg2MzgzMTd9.K5ZQzngFINuZWLjljxIyKmLL0eOTSAKuztiHOu6Pjhs',
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
