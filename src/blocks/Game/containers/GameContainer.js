import React, {useEffect, useRef} from 'react';
import {useApp} from '@pixi/react-pixi';
import Game from '../components/Game';
import {useAppState} from '/src/store';
import {APP_ACTIONS} from '/src/store/actions';

const GameContainer = () => {
  let timer;
  const app = useApp();
  const {state: {modal, game}, dispatch} = useAppState();
  const playerCarRef = useRef(null);
  const restartTimeout = () => {
    timer = setTimeout(() => {
      dispatch({type: APP_ACTIONS.restart});
    }, 3000);
  }

  useEffect(() => {
    if (modal.isOpen && app.ticker.started) {
      app.ticker.stop();
    } else {
      app.ticker.start();
    }
  }, [modal]);

  useEffect(() => {
    if (game.isEnd && app.ticker.started) {
      clearTimeout(timer);
      restartTimeout();
    }
  }, [game]);

  return <Game playerCarRef={playerCarRef}
               destroyCars={game.isCrash || game.isEnd}/>;
};

export default GameContainer;
