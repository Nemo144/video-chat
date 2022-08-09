import React from "react";
import { VideoPlayer } from "./component/VideoPlayer";
import { Options } from "./component/Options";
import { Notifications } from "./component/Notifications";

const App = () => {
  return (
    <div>
      <div className="flex justify-center border-x-8 border-y-8 h-16 text-xl rounded-md font-extrabold mx-96 my-5 items-center bg-white">
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
