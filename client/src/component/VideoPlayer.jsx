import { Paper } from "@material-ui/core";
import React from "react";
import { SocketContext } from "../SocketContext";

export const VideoPlayer = () => {
  return (
    <div className="flex flex-col justify-center ">
      <Paper className="p-10 border-2 border-black border-solid m-10">
        video
      </Paper>
    </div>
  );
};
