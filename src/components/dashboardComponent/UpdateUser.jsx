import React, { useState } from 'react';
import './updateuser.css';

const UpdateUser = ({ initialValue = '', onSave }) => {
  const [value, setValue] = useState(initialValue);
  const [tempValue, setTempValue] = useState(initialValue);

  const handleSave = () => {
    setValue(tempValue);
    if (onSave) onSave(tempValue);
  };

  const handleCancel = () => {
    setTempValue(value);
  };

  return (
    <div className="editbox">
      <input
        type="text"
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        className="editbox-input"
        placeholder="update details"
      />
      <div className="editbox-buttons">
        <button onClick={handleSave} className="editbox-save">Save</button>
        <button onClick={handleCancel} className="editbox-cancel">Cancel</button>
      </div>
    </div>
  );
};

export default UpdateUser;
