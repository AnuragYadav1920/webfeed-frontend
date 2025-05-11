import React, { useState, useRef } from 'react';
import "./updateuser.css"

const UpdateUser = ({ label, fieldName, value, setValue, handleUpdate, message }) => {
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    if (fieldName === 'avatar' || fieldName === 'cover') {
      setValue(e.target.files[0]);
    } else {
      setValue(e.target.value);
    }
  };

  return (
    <div className="update-form-container">
      <label htmlFor={fieldName}>{label}</label>
      {fieldName === 'avatar' || fieldName === 'cover' ? (
        <>
          <input
            type="file"
            id={fieldName}
            ref={fileInputRef}
            onChange={handleChange}
            className="update-form-input"
          />
          {/* <button onClick={() => fileInputRef.current.click()} className="update-form-button">
            Choose File
          </button> */}
        </>
      ) : (
        <input
          type="text"
          id={fieldName}
          value={value}
          onChange={handleChange}
          className="update-form-input"
        />
      )}
      <button onClick={()=>handleUpdate()} className="update-form-button">Update</button>
      {message && <p className="update-form-message">{message}</p>}
    </div>
  );
};

export default UpdateUser;

