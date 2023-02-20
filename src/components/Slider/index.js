import React, { useCallback } from 'react';
import Slider from './Slider';
import SliderMark from './SliderMark';

const SliderContainer = () => {
  const [value, setValue] = React.useState(3);

  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  });

  const MARKS = [
    { value: 1, label: <SliderMark value={1} /> },
    { value: 2, label: <SliderMark value={2} /> },
    { value: 3, label: <SliderMark value={3} /> },
    { value: 4, label: <SliderMark value={4} /> },
    { value: 5, label: <SliderMark value={5} /> },
    { value: 6, label: <SliderMark value={6} /> },
  ];

  return (
      <Slider
          min={1}
          max={6}
          marks={MARKS}
          handleChange={handleChange}
          value={value}
      />
  );
};

export default SliderContainer;
