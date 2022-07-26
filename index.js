//creating a server

const app = require("express")();

//to get to the server
const server = require("http").createServer(app);

//to enable cross origin request
const cors = require("cors");

//for real-time communication between web clients and servers
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

//calling the cors to be used
app.use(cors());

//the port for the server
const PORT = process.env.PORT || 5000;

//creating the first route
app.get("/", (req, res) => {
  res.send("server is running");
});

//implementing the socket.io
//sockets are used for real time data(video,audio etc...) transmission
io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callended");
  });

  socket.on("calluser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("calluser", { signal: signalData, from, name });
  });

  socket.on("answercall", (data) => {
    io.to(data.to).emit("callccepted", data.signal);
  });
});

//to be able to visit the server
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
