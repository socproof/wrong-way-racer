import React, {useState} from 'react';
import {Container, AnimatedSprite, useApp} from '@pixi/react-pixi';
import {Texture, BaseTexture} from 'pixi.js';

import ExplosionSpritesheet from '/src/assets/images/explosion_spritesheet.avif';
import {EXPLOSION_SPRITESHEETS} from '../constants';
import {useAppState} from '/src/store';
import {APP_ACTIONS} from '/src/store/actions';

const Explosion = ({playerCarRef}) => {
  const {state, dispatch} = useAppState();
  const baseTexture = new BaseTexture(ExplosionSpritesheet);
  const playerCar = playerCarRef?.current;
  const playerBounds = playerCar?.getBounds();
  const [isComplete, setIsComplete] = useState(false);

  const onCompleteHandler = () => {
    setIsComplete(true);
    dispatch({type: APP_ACTIONS.endGame});
  }

  const textures = EXPLOSION_SPRITESHEETS.map((sprites) => {
    return new Texture(
        baseTexture,
        sprites.frame,
        sprites.orig,
        sprites.trim,
    );
  });

  return (
      !isComplete &&
      state.game.isCrash && (
          <Container
              x={playerBounds.x}
              y={playerBounds.y - playerBounds.height - 50}
              zIndex={30}
          >
            <AnimatedSprite
                animationSpeed={0.7}
                textures={textures}
                loop={false}
                gotoAndStop={() => {
                }}
                anchor={{x: 0.5, y: 1}}
                onComplete={onCompleteHandler}
            />
          </Container>
      )
  );
};

export default Explosion;
