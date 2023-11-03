import {useState} from 'react';

import './Burger.css';
import Ingredient from '../Ingredient/Ingredient';

import meatImage from '../../assets/meat.svg';
import cheeseImage from '../../assets/cheese.svg';
import saladImage from '../../assets/salad-iceberg.svg';
import baconImage from '../../assets/bacon.svg';

interface Ingredient {
  name: string;
  price: number;
  image: string;
}

const Burger = () => {
  const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Salad', price: 10, image: saladImage},
    {name: 'Bacon', price: 60, image: baconImage},
  ];

  const [ingredients, setIngredients] = useState(
    INGREDIENTS.map((ingredient) => ({...ingredient, count: 0}))
  );

  const actionAbstractOrder = (name, number) => {
    setIngredients((prevIngredients) =>
      prevIngredients.map((ingredient) => {
        if (ingredient.name === name) {
          const newCount = ingredient.count + number;
          if (newCount >= 0) {
            return {...ingredient, count: newCount};
          }
        }
        return ingredient;
      })
    );
  };

  const addToOrder = (name: string) => actionAbstractOrder(name, 1);
  const removeOrder = (name: string) => actionAbstractOrder(name, -1);

  const itemsList = (
    ingredients.map((ingredient, index) => (
      <Ingredient
        key={index}
        name={ingredient.name}
        image={ingredient.image}
        count={ingredient.count}
        addToOrder={() => addToOrder(ingredient.name)}
        removeFromOrder={() => removeOrder(ingredient.name)}
      />
    ))
  );

  return (
    <div className="Burger">
      <div className="ingredients">
        {itemsList}
      </div>
      <div className="burger-preview">
        <div className="BreadTop">
          <div className="Seeds1"/>
          <div className="Seeds2"/>
        </div>

        <div className="BreadBottom"/>
        <div className="total-price">Price: som</div>
      </div>
    </div>
  );
};

export default Burger;