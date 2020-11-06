import React from 'react';
import Digit from '../Digit/Digit';
import './NumberPanel.scss';

interface IProps {
  display: number;
}

const NumberPanel: React.FC<IProps> = ({ display }) => {
  const filledDisplay = display.toString().padStart(3, '0');
  const displayArr = filledDisplay.split('');

  return (
    <div className="number-panel bevel-down">
      <Digit display={displayArr[0]} />
      <Digit display={displayArr[1]} />
      <Digit display={displayArr[2]} />
    </div>
  );
};

export default NumberPanel;
