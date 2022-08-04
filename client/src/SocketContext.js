import React, { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

//to create the initial context
const SocketContext = createContext();

//to create the initial instant of socket.io(server)
//upon deployment, localhost will be replaced with deployed url
const socket = io("http://localhost:5000");

const ContextProvider = ({ children }) => {
  const [stream, setStream] = useState(null);
  const [me, setMe] = useState("");
  const [call, setCall] = useState({});
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    //to get permission to use user's device camera and audio
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true }) //returns a promise
      .then((currentStream) => {
        setStream(currentStream);

        //to set the stream to my ref
        myVideo.current.srcObject = currentStream;
      });

    socket.on("me", (id) => setMe(id));

    socket.on("calluser", ({ from, name: callerName, signal }) => {
      setCall({ isReceivedCall: true, from, name: callerName, signal });
    });
  }, []);

  const answerCall = () => {
    setCallAccepted(true);

    //to create a peer capable of video call
    const peer = new Peer({ initiator: false, trickle: false, stream });

    //using peer and socket to achieve the video connection
    peer.on("signal", (data) => {
      socket.emit("answercall", { signal: data, to: call.from });
    });

    //the video stream for the receiving user
    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    //connecting the call to socket.on("calluser"...) to get the entire info of the incoming call
    peer.signal(call.signal);

    //setting the video connectionRef to the peer
    connectionRef.current = peer;
  };

  const callUser = () => {};

  const leaveCall = () => {};
};
