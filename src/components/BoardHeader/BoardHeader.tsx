import React from 'react';
import NumberPanel from '../NumberPanel/NumberPanel';
import Face from '../Face/Face';
import './BoardHeader.scss';

interface IProps {}

const BoardHeader: React.FC = () => {
  return (
    <div className="board-header bevel-down">
      <NumberPanel display={123} />
      
      <Face />
      
      <NumberPanel display={6} />
    </div>
  );
};

export default BoardHeader;
