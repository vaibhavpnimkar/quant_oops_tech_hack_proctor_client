import Peer from "peerjs";
import { atom } from "recoil";

export interface IPeerState {
  me: Peer;
  peerList: any;
  streams: any;
}

export const peerState = atom({
  key: "PeerState",
  default: {
    me: new Peer(),
    peerList: null,
    streams: null,
  } as IPeerState,
});
