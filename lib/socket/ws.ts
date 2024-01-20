import socketIOClient from "socket.io-client";

export const WS = import.meta.env.VITE_APP_API_HOST;
export const ws = socketIOClient(WS);
