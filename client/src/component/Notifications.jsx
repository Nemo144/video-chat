import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

export const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div
          className="border w-80 ml-80 mb-10 bg-white rounded"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h1 className="mr-2">{call.name} is calling: </h1>
          <button
            className="border text-white bg-blue-600 rounded-md w-20"
            onClick={answerCall}
          >
            Answer
          </button>
        </div>
      )}
    </>
  );
};
