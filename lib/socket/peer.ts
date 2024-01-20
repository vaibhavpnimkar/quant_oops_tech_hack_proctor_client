import Peer from "peerjs";
const peer = new Peer("", {
  host: "/",
  port: 3001,
});

export { peer };
