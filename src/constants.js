import {io} from 'socket.io-client';

export const KEYBOARD_CODES = {
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight",
};

export const SOCKET_EVENTS = {
  newEnemy: "newEnemy",
  players: "players",
  newChatJoin: "newChatJoin",
  newChat: "newChat",
};

export const socket = io("wss://wrongway-racer-api.spls.ae");

export const CAR_POSITIONS = {
  center: "center",
  left: "left",
  right: "right",
};
