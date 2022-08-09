import { Paper } from "@material-ui/core";
import React from "react";
import { SocketContext } from "../SocketContext";

export const VideoPlayer = () => {
  return (
    <div className="flex flex-row justify-center ">
      {/* my video */}
      <div className="p-20 border-2 border-black bg-white border-solid m-10">
        <div className="w-full">
          <div className="-my-16 -mx-16">Name</div>
          <video playsInline muted ref={null} autoPlay className="" />
        </div>
      </div>

      {/* other person's video */}
      <div className="p-20 border-2 border-black bg-white border-solid m-10">
        <div className="w-full">
          <div className="-my-16 -mx-16">Name</div>
          <video playsInline ref={null} autoPlay className="" />
        </div>
      </div>
    </div>
  );
};
