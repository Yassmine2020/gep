import { useState } from 'react';
import Button from './Button';

export default function EditModal({ isOpen, onClose, onUpdateDeviceID }) {
  const [deviceID, setDeviceID] = useState('');

  const handleInputChange = (event) => {
    setDeviceID(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateDeviceID(deviceID);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center  bg-gray-900 bg-opacity-50 ${
        isOpen ? '' : 'hidden'
      }`}>
      <div className="modal bg-white rounded p-8">
        <h2 className="text-xl mb-4">Update Device Id</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={deviceID}
            onChange={handleInputChange}
            placeholder="Enter device name"
            className="border border-gray-300 px-4 py-2 rounded"
          />
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 font-bold border border-gray-300 rounded">
              Cancel
            </button>
            <Button
              title="Update"
              type="submit"
              className="px-4 py-2 bg-primary-500 text-white rounded"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
