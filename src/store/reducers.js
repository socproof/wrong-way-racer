import {APP_ACTIONS} from './actions';
import {initialState} from './index';

export default (state, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case APP_ACTIONS.openModal:
      newState.modal.isOpen = true;
      return newState;

    case APP_ACTIONS.closeModal:
      newState.modal.isOpen = false;
      return newState;

    case APP_ACTIONS.endGame:
      newState.game.isEnd = true;
      return newState;

    case APP_ACTIONS.crashGame:
      newState.game.isCrash = true;
      return newState;

    case APP_ACTIONS.restart:
      return initialState;

    default:
      return newState;
  }
}
