import * as React from 'react';

interface Props {
  name: string;
  image: string;
  count: number;
  deleteBtn: () => void;
  addToOrder: () => void;
}

const Ingredient: React.FC<Props> = ({name, image, count, deleteBtn, addToOrder}) => {
  return (
    <div className="ingredient-item" onClick={addToOrder}>
      <img src={image} alt={`imageOf` + name}/>
      <span> {name}</span>
      <span>{count}</span>
      <button className="delete-btn" onClick={deleteBtn}/>
    </div>
  );
};

export default Ingredient;