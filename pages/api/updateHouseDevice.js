const axios = require('axios');
const apiToken = process.env.API_TOKEN;

export default function updateHouseDevice(req, res) {
  const houseName = req.query.houseName;
  const deviceID = req.query.deviceID;
  const newDeviceID = req.query.newDeviceID;

  let config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: `http://192.168.100.244:8080/devman/update/device?device_id=${deviceID}&house=${houseName}&new_device_id=${newDeviceID}`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: apiToken,
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
