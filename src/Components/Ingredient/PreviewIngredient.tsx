import * as React from 'react';

interface Props {
  itemClassName: string
}

const PreviewIngredient: React.FC<Props> = ({itemClassName}) => {
  return (
    <div className={itemClassName}/>
  );
};

export default PreviewIngredient;