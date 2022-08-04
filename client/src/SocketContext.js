import React, { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import peer from "simple-peer";

//to create the initial context
const SocketContext = createContext();

//to create the initial instant of socket.io(server)
//upon deployment, localhost will be replaced with deployed url
const socket = io("http://localhost:5000");

const ContextProvider = ({ children }) => {
  const [stream, setStream] = useState(null);

  const myVideo = useRef();

  useEffect(() => {
    //to get permission to use user's device camera and audio
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true }) //returns a promise
      .then((currentStream) => {
        setStream(currentStream);

        //to set the stream to my ref
        myVideo.current.srcObject = currentStream;
      });
  });

  const answerCall = () => {};

  const callUser = () => {};

  const leaveCall = () => {};
};
