import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import socket from "../socket";

const VideoCall = () => {
  const { roomId } = useParams(); // ✅ FIX

  useEffect(() => {
    if (roomId) {
      socket.emit("join-room", roomId);
    }
  }, [roomId]);

  return (
    <div>
      <h2>Video Call Room: {roomId}</h2>
    </div>
  );
};

export default VideoCall;