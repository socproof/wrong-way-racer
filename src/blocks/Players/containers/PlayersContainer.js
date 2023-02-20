import React, { useCallback, useEffect, useState } from 'react';
import { useAppState } from '/src/store';
import { socket, SOCKET_EVENTS } from '/src/constants';
import Players from '/src/blocks/Players/components/Players';
import {APP_ACTIONS} from '/src/store/actions';

const PlayersContainer = () => {
  const [players, setPlayers] = useState([]);
  const { dispatch } = useAppState();

  const handleClickOpen = useCallback(() => {
    dispatch({ type: APP_ACTIONS.openModal });
  }, []);

  useEffect(() => {
    socket.on(SOCKET_EVENTS.players, (data) => {
      setPlayers(data);
    });
  }, []);

  return <Players players={players} handleClickOpen={handleClickOpen} />;
};

export default PlayersContainer;
