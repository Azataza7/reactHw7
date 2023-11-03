import * as React from 'react';
import RemoveButton from '../../Buttons/RemoveButton';
import AddButton from '../../Buttons/AddButton';

interface Props {
  name: string;
  image: string;
  count: number;
  addToOrder: () => void;
  removeFromOrder: () => void;
}

const Ingredient: React.FC<Props> = ({name, image, count, addToOrder, removeFromOrder}) => {
  return (
    <div className="ingredient-item">
      <img src={image} alt={`imageOf` + name}/>
      <span> {name}</span>
      <div className="panel">
        <AddButton addToOrder={addToOrder}/>
        <span>{count}</span>
        <RemoveButton removeFromOrder={removeFromOrder}/>
      </div>
    </div>
  );
};

export default Ingredient;