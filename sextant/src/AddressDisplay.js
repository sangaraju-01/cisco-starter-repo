import React, { useState, useEffect } from 'react';
function AddressDisplay({ type }) {
    const [ipAddress, setIpAddress] = useState('');
  
    useEffect(() => {
      fetch(`https://api.ipify.org?format=json&${type}`)
        .then((response) => response.json())
        .then((data) => setIpAddress(data.ip));
    }, [type]);
  
    return (
      <div className="AddressDisplay">
        <p>{ipAddress}</p>
      </div>
    );
  }
  
  export default AddressDisplay;
  