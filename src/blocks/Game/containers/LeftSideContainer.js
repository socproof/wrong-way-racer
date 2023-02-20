import React, { useEffect, useState } from 'react';
import LeftSide from '../components/LeftSide';
import { generateRandomSeconds } from '../../../lib';

const LeftSideContainer = () => {
  const [leftSide, setLeftSide] = useState(null);

  const destroy = () => {
    setLeftSide(null);

    setTimeout(() => {
      setLeftSide(<LeftSide destroy={destroy} />);
    }, generateRandomSeconds());
  };

  useEffect(() => {
    setLeftSide(<LeftSide destroy={destroy} />);
  }, []);

  return leftSide;
};

export default LeftSideContainer;
