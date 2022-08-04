import React from "react";
import { VideoPlayer } from "./component/VideoPlayer";
import { Options } from "./component/Options";
import { Notifications } from "./component/Notifications";

const App = () => {
  return (
    <div>
      <div className="flex justify-center items-center border bg-white">
        Video Chat
      </div>

      <div className="flex flex-col justify-center items-center">
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
    </div>
  );
};

export default App;
