import React from 'react'
import BreadTop from '..//../../assets/image/top.png';
import BreadBottom from '..//../../assets/image/bottom.png';
import Meat from '..//../../assets/image/meat.png';
import Salad from '..//../../assets/image/salad.png';
import Cheese from '..//../../assets/image/cheese.png';
import  './Ingredient.css';

const Ingredient = (props) => {
    let ingredient = null;

    switch(props.type)
    {
        case 'bread-bottom':
            ingredient = <div><img src={BreadBottom} alt='breadBottom'/></div>;
            break;
        case 'bread-top':
            ingredient = <div><img style={{marginTop:"50px"}} src={BreadTop} alt='BreadTop'/></div>;
            break;
        case 'meat':
            ingredient = <div><img src={Meat} alt='Meat'/></div>;
            break;
        case 'cheese':
            ingredient = <div><img src={Cheese} alt='Cheese'/></div>;
            break;
        case 'salad':
            ingredient = <div><img src={Salad} alt='salad'/></div>;
            break;

        default:
            ingredient =null;
    }

  return (
    <div className='Ingredient '>
        {ingredient}
    </div>
  )
}

export default Ingredient