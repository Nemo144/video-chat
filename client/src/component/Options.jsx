import React, { useContext, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";

export const Options = ({ children }) => {
  const [idToCall, setIdToCall] = useState("");
  const { me, callAccepted, setName, name, leaveCall, callUser, callEnded } =
    useContext(SocketContext);

  return (
    <div className="w-96 mt-80 mb-0 p-0 sm:w-4/5  ">
      <div className="px-10 py-10">
        <form className="flex flex-col" noValidate autoComplete="off">
          <div className="sm:flex-col w-full">
            <div className="p-20">
              <h1>Account Info</h1>
              <input
                type="text"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              <CopyToClipboard text={me} className="m-20">
                <button type="button" color="#ffffff" fullWidth>
                  copy your Id
                </button>
              </CopyToClipboard>
            </div>

            <div className="p-20">
              <h1>Make a call</h1>
              <input
                type="text"
                label="ID to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                fullWidth
              />
              {callAccepted && !callEnded ? (
                <button
                  type="button"
                  color="#000"
                  onClick={leaveCall}
                  className="m-20"
                >
                  Hang up
                </button>
              ) : (
                <button
                  type="button"
                  color="#fff"
                  onClick={() => callUser(idToCall)}
                  className="m-20"
                >
                  Call
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
      Options
      {children}
    </div>
  );
};
