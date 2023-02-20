import { useEffect, useState } from 'react';
import {socket, SOCKET_EVENTS} from '../constants';

export const usePlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    socket.on(SOCKET_EVENTS.players, (data) => {
      setPlayers(data);
    });

    return () => {
      socket.off(SOCKET_EVENTS.players);
    };
  }, []);

  return players;
};
