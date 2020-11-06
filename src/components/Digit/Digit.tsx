import React from 'react';
import './Digit.scss';

const WIDTH = -17;

interface IProps {
  display: string;
}

const Digit: React.FC<IProps> = ({ display }) => {
  const style = {
    backgroundPositionX: Number(display) * WIDTH
  };

  return (
    <div className="digit" style={style} />
  );
};

export default Digit;
