import Button from '@/components/Button';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const columns = ['deviceID', 'status', 'edit', 'delete'];

// const devices = [
//   { deviceID: 'Joe James' },
//   { deviceID: 'Joe Jeso' },
//   { deviceID: 'Joe Jesa' },
//   { deviceID: 'Joe Jasmn' },
// ];

export default function HousePage() {
  const router = useRouter();
  const houseName = router.query.houseName;
  const [houseData, setHouseData] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`/api/fetchHouseDevices?houseName=${houseName}`)
      .then((response) => response.json())
      .then((houseData) => {
        setHouseData(houseData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [houseName]);

  const handleDeleteDevice = async (deviceID) => {
    try {
      const response = await fetch(
        // `/api/deleteHouseDevice`,
        `/api/deleteHouseDevice?deviceID=${deviceID}&houseName=${houseName}`,
        // `/api/deleteHouseDevice?deviceID=HOME1_TEMP_H&houseName=sunimplant`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message); // Set the success message
        // Perform any additional actions after successful deletion
        console.log(data.message);
      } else {
        setMessage('Failed to delete resource'); // Set the failure message
        // Handle the failure case
      }
    } catch (error) {
      setMessage('Error: ' + error.message); // Set the error message
      // Handle any errors that occur during the deletion process
    }
  };

  return (
    // <div>
    //   {houseData ? (
    //     <div>{JSON.stringify(houseData.data)}</div>
    //   ) : (
    //     <div>ERROR while fetching the data</div>
    //   )}
    // </div>

    <div className="">
      <Button title="addDevice" className="" />
      <div className="flex">
        {columns.map((col, index) => (
          <div key={index} className="w-1/4 px-8 py-2 border-b border-gray-400">
            {col}
          </div>
        ))}
      </div>

      <div>
        {houseData ? (
          houseData.data.map((device, index) => (
            <div key={index} className="flex border-b border-gray-400">
              <div className="w-1/4 px-8 py-2">{device.device_id}</div>
              <div className="w-1/4 px-8 py-2">0</div>
              <div className="w-1/4 px-8 py-2">
                <Button title="edit" />
              </div>
              <div className="w-1/4 px-8 py-2">
                <Button
                  onClick={() => handleDeleteDevice(`${device.device_id}`)}
                  title="delete"
                />
              </div>
            </div>
          ))
        ) : (
          <div>ERROR while fetching the data</div>
        )}
      </div>
    </div>
  );
}
