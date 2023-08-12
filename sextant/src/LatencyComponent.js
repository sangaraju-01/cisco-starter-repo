import React, { useEffect, useState } from 'react';
import WebSocketClient from 'your-websocket-library'; // Replace with the actual library you're using

const LatencyComponent = () => {
    const [latency, setLatency] = useState(null);
    const ws = new WebSocketClient('ws://localhost:55455'); // Replace with the correct WebSocket URL
  
    useEffect(() => {
      // WebSocket event listeners
      useEffect(() => {
        ws.onopen = () => {
          console.log('WebSocket connection opened');
        };
      
        ws.onmessage = (event) => {
          // Calculate and update latency
          ws.onmessage = (event) => {
            const packetTimestamp = parseInt(event.data); // Assuming the data is a timestamp in milliseconds
            const currentTimestamp = Date.now();
            const packetLatency = currentTimestamp - packetTimestamp;
          
            setLatency(packetLatency);
          };
          
        };
      
        ws.onclose = () => {
          console.log('WebSocket connection closed');
        };
      
        return () => {
          ws.close();
        };
      }, []);
      
    }, []);
  
    return (
      <div>
        <h2>Packet Latency</h2>
        {latency !== null && <p>Latency: {latency} ms</p>}
      </div>
    );
  };
  return (
    <div>
      <h2>Packet Latency</h2>
      {latency !== null && <p>Latency: {latency} ms</p>}
    </div>
  );
  export default LatencyComponent;
