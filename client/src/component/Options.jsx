import React, { useContext, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";
import { AiFillCopy } from "react-icons/ai";

export const Options = ({ children }) => {
  const [idToCall, setIdToCall] = useState("");
  const { me, callAccepted, setName, name, leaveCall, callUser, callEnded } =
    useContext(SocketContext);

  return (
    <div className="w-96 mt-80 mb-0 p-0 sm:w-4/5  ">
      <div className="px-10">
        <form className="" noValidate autoComplete="off">
          <div className="flex flex-row bg-white w-full">
            <div className="p-20">
              <h1>Account Info</h1>
              <input
                className="mt-10 border-black border border-t-0 border-r-0 border-l-0"
                type="text"
                label="Name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              <CopyToClipboard
                text={me}
                className="bg-blue-600 border w-full p-2 flex flex-row justify-center items-center text-white mt-4 "
              >
                <button type="button">
                  <AiFillCopy className="mt-1" />
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
