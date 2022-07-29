import React from "react";
import { VideoPlayer } from "./component/VideoPlayer";
import { Options } from "./component/Options";
import { Notifications } from "./component/Notifications";

const App = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center border-y-8 bg-white">
          Video Chat
        </div>
      </div>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default App;
