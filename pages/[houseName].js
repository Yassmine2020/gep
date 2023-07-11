import Button from '@/components/Button';
import EditModal from '@/components/EditModal';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const columns = ['deviceID', 'status', 'edit', 'delete'];

export default function HousePage() {
  const router = useRouter();
  const houseName = router.query.houseName;
  const [houseData, setHouseData] = useState(null);
  const [message, setMessage] = useState('');
  const [editdeviceID, setEditdeviceID] = useState(null);
  const [deviceID, setDeviceID] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldReload, setShouldReload] = useState(false);

  // get the data
  useEffect(() => {
    if (houseName) {
      fetch(`/api/fetchHouseDevices?houseName=${houseName}`)
        .then((response) => response.json())
        .then((houseData) => {
          setHouseData(houseData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [houseName]);

  // Get the data

  // Delete the data
  const handleDeleteDevice = async (deviceID) => {
    try {
      const response = await fetch(
        `/api/deleteHouseDevice?deviceID=${deviceID}&houseName=${houseName}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        console.log(data.message);
        setShouldReload(true);
      } else {
        setMessage('Failed to delete the device');
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };
  // Delete the data

  // Update the data
  const handleInputChange = (event) => {
    setDeviceID(event.target.value);
  };

  const handleEditClick = (deviceID) => {
    setEditdeviceID(deviceID);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateDeviceID = async (newDeviceID) => {
    try {
      const response = await fetch(
        `/api/updateHouseDevice?deviceID=${editdeviceID}&houseName=${houseName}&newDeviceID=${newDeviceID}`,
        {
          method: 'PUT',
          body: JSON.stringify({ deviceID: newDeviceID }),
        }
      );

      if (response.ok) {
        console.log(`Device id updated to: ${newDeviceID}`);
        setDeviceID(newDeviceID);
        setIsModalOpen(false);
        setShouldReload(true);
      } else {
        console.log('Failed to update device name');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  // Update the data

  useEffect(() => {
    if (shouldReload) {
      window.location.reload();
      setShouldReload(false); // Reset shouldReload back to false after reloading
    }
  }, [shouldReload]);

  return (
    // <div>
    //   {houseData ? (
    //     <div>{JSON.stringify(houseData.data)}</div>
    //   ) : (
    //     <div>ERROR while fetching the data</div>
    //   )}
    // </div>

    <div>
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
                <Button
                  onClick={() => handleEditClick(`${device.device_id}`)}
                  title="edit"
                />
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
          <div>Loading</div>
        )}
      </div>

      {/* modal */}
      <EditModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onUpdateDeviceID={handleUpdateDeviceID}
      />
      {/* modal */}
    </div>
  );
}
