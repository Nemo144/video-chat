import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

export const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <div className="flex flex-row justify-center ">
      {/* my video */}
      {stream && (
        <div className="p-20 border-2  bg-transparent border-white border-solid m-10">
          <div className="w-full">
            <div className="-my-16 -mx-16">{name || "Name"}</div>
            <video playsInline muted ref={myVideo} autoPlay className="" />
          </div>
        </div>
      )}

      {/* other person's video */}
      {callAccepted && !callEnded && (
        <div className="p-20 border-2 border-black bg-white border-solid m-10">
          <div className="w-full">
            <div className="-my-16 -mx-16">{call.name || "Name"}</div>
            <video playsInline ref={userVideo} autoPlay className="" />
          </div>
        </div>
      )}
    </div>
  );
};
