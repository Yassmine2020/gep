import Button from '@/components/Button';
import EditModal from '@/components/EditModal';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const columns = ['deviceID', 'status', 'edit', 'delete'];

export default function HousePage() {
  const router = useRouter();
  const houseName = router.query.houseName;
  const [houseData, setHouseData] = useState(null);
  // const [message, setMessage] = useState('');
  const [editdeviceID, setEditdeviceID] = useState(null);
  // const [deviceID, setDeviceID] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldReload, setShouldReload] = useState(false);

  // Get the data
  useEffect(() => {
    if (houseName) {
      fetch(`/api/getHouseDevices?houseName=${houseName}`)
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
        // setMessage(data.message);
        console.log(data.message);
        alert(data.message);
        setShouldReload(true);
      } else {
        setMessage('Failed to delete the device');
        alert(message);
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };
  // Delete the data

  // Update the data
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
        alert(`Device id updated to: ${newDeviceID}`);
        // console.log(`Device id updated to: ${newDeviceID}`);
        // setDeviceID(newDeviceID);
        setIsModalOpen(false);
        setShouldReload(true);
      } else {
        alert('Failed to update device name');
        // console.log('Failed to update device name');
      }
    } catch (error) {
      alert('Error:', error);
      // console.log('Error:', error);
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
    <div className="w-full px-10 py-10 capitalize">
      <div className="w-full pb-4 flex justify-end items-center">
        <Button title="addDevice" className="" />
      </div>
      <div className="flex bg-primary-100 border shadow rounded-lg mb-3">
        {columns.map((col, index) => (
          <div key={index} className="font-semibold w-1/4 py-2 px-4">
            {col}
          </div>
        ))}
      </div>

      <div>
        {houseData ? (
          houseData.data.map((device, index) => (
            <div key={index} className="flex shadow border rounded-lg">
              <div className="w-1/4 py-2 px-4 flex items-center font-semibold">
                {device.device_id}
              </div>
              <div className="w-1/4 py-2 px-4 flex items-center">0</div>
              <div className="w-1/4 py-2 px-4">
                <Button
                  onClick={() => handleEditClick(`${device.device_id}`)}
                  title="edit"
                />
              </div>

              <div className="w-1/4 py-2 px-4">
                <Button
                  onClick={() => handleDeleteDevice(`${device.device_id}`)}
                  title="delete"
                />
              </div>
            </div>
          ))
        ) : (
          <div className="bg-gray-50 py-10 flex justify-center items-center space-x-2 rounded-lg">
            <p>Loading</p>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
              className="animate-spin text-primary-800">
              <path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z" />
            </svg>
          </div>
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
