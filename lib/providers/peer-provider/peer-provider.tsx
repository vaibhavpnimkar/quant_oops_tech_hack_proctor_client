import { useEffect, useState } from "react";
import Peer from "peerjs";
import { v4 as uuidV4 } from "uuid";
import { useSetRecoilState } from "recoil";
import { IPeerState, peerState } from "@/atoms/peerState";

export const PeerProvider = ({ children }: { children: React.ReactNode }) => {
  const setPeerState = useSetRecoilState(peerState);

  useEffect(() => {
    // const meId = uuidV4();
    
    // setPeerState((prevState: IPeerState) => ({
    //   ...prevState,
    //   me: peer,
    // }));
  }, []);
  return children;
};
