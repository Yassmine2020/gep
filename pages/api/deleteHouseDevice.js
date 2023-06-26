const axios = require('axios');

export default function deleteHouseDevice(req, res) {
  const houseName = req.query.houseName;
  const deviceID = req.query.deviceID;

  let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: `http://192.168.100.244:8080/devman/delete/device?device_id=${deviceID}&house=${houseName}`,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZ3NicCIsInJvbGUiOiJlZGl0b3IiLCJleHAiOjE2ODg2MzgzMTd9.K5ZQzngFINuZWLjljxIyKmLL0eOTSAKuztiHOu6Pjhs',
    },
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    });
}
