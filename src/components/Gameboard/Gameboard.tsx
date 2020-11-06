import React from 'react';
import BoardHeader from '../BoardHeader/BoardHeader';
import BoardBody from '../BoardBody/BoardBody';
import './Gameboard.scss';

interface IProps {
  width: number;
  height: number;
}

const Gameboard: React.FC<IProps> = ({ width, height }) => {
  return (
    <div className="gameboard bevel-up">
      <BoardHeader />

      <BoardBody width={width} height={height} />
    </div>
  );
};

export default Gameboard;
