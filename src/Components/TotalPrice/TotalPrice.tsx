import * as React from 'react';

interface Props {
  getTotal: () => void;
}

const TotalPrice:React.FC<Props> = ({getTotal}) => {
  return (
    <span className="totalPrice">Cost: {getTotal} som</span>
  );
};

export default TotalPrice;