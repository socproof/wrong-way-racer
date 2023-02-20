import React, {forwardRef, useRef, useState} from 'react';
import {Sprite, useApp, useTick} from '@pixi/react-pixi';

import CarCenterIcon from '/src/assets/images/cars/car_center.png';
import CarLeftIcon from '/src/assets/images/cars/car_left.png';
import CarRightIcon from '/src/assets/images/cars/car_right.png';
import {CAR_POSITIONS, KEYBOARD_CODES} from '/src/constants';
import {useKeyboard} from '/src/lib';

const gameSpeed = 1;

const PlayerCar = forwardRef(
    ({root = document, positionRef}, playerCarRef) => {
      const app = useApp();
      let {current: animateCount} = useRef(0);
      let {current: animateDiff} = useRef(0.05);
      const carStartPosY = app.renderer.screen.height - 20;
      const {isKeyPress, removeKey} = useKeyboard({root});

      const [image, setImage] = useState(CarCenterIcon);
      const [xPos, setXPos] = useState(app.renderer.screen.width * 0.5);

      useTick(() => {
        animate();

        if (isKeyPress(KEYBOARD_CODES.ArrowLeft)) {
          moveLeft();
        }

        if (isKeyPress(KEYBOARD_CODES.ArrowRight)) {
          moveRight();
        }
      });

      const animate = () => {
        animateCount += gameSpeed;

        if (animateCount > 50) {
          animateCount = 0;
          animateDiff *= -1;
        }

        playerCarRef.current.y =
            animateCount < 100
                ? playerCarRef.current.y + animateDiff * gameSpeed
                : carStartPosY;
      };

      const moveLeft = () => {
        if (positionRef.current !== CAR_POSITIONS.left) {
          removeKey(KEYBOARD_CODES.ArrowLeft);

          const newPosition =
              positionRef.current === CAR_POSITIONS.right
                  ? CAR_POSITIONS.center
                  : CAR_POSITIONS.left;

          setXPos(
              (currentXPos) => currentXPos - app.renderer.screen.width * 0.25,
          );
          positionRef.current = newPosition;
          setTexture(newPosition);
        }
      };

      const moveRight = () => {
        if (positionRef.current !== CAR_POSITIONS.right) {
          removeKey(KEYBOARD_CODES.ArrowRight);

          const newPosition =
              positionRef.current === CAR_POSITIONS.left
                  ? CAR_POSITIONS.center
                  : CAR_POSITIONS.right;

          setXPos(
              (currentXPos) => currentXPos + app.renderer.screen.width * 0.25,
          );
          positionRef.current = newPosition;
          setTexture(newPosition);
        }
      };

      const setTexture = (newPosition) => {
        switch (newPosition) {
          case CAR_POSITIONS.center:
            setImage(CarCenterIcon);
            break;

          case CAR_POSITIONS.left:
            setImage(CarRightIcon);
            break;

          case CAR_POSITIONS.right:
            setImage(CarLeftIcon);
            break;

          default:
            break;
        }
      };

      return (
          <Sprite
              ref={playerCarRef}
              image={image}
              anchor={{x: 0.5, y: 1}}
              scale={0.5}
              x={xPos}
              y={carStartPosY}
              zIndex={20}
          />
      );
    },
);

export default PlayerCar;
