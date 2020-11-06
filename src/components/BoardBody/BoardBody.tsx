import React from 'react';
import Cell from '../Cell/Cell';
import './BoardBody.scss';

interface IProps {
  width: number;
  height: number;
}

const WIDTH = 25;

const BoardBody: React.FC<IProps> = ({ width, height }) => {
  const numCells = width * height;
  let cells = [];

  for (let x = 0; x < numCells; x++) {
    cells.push(<Cell key={x} />)
  } 

  const style = {
    width: WIDTH * width
  };

  return (
    <div className="board-body bevel-down" style={style}>
      {cells}
    </div>
  );
};

export default BoardBody;
