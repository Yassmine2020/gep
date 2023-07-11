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
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZ3NicCIsInJvbGUiOiJlZGl0b3IiLCJleHAiOjE2ODk1OTAwMjR9.psxi7GL9dYutzuR9wCz8zs9wpUF1yakrNgsokSWnAiQ',
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
