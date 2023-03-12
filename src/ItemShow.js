import { useState } from 'react';
import spoon from './svg/latte.png'
import plate from './svg/big-cup.png'
import cup from './svg/fork.png'
import mug from './svg/dish.png'
import heart from './svg/heart.png'


const svgMap ={
    spoon,
    plate,
    cup,
    mug
}

function ItemShow({type}) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
       setClicks(clicks + 1);
    };

    return (
    <div onClick={handleClick}>
        <img alt="item" src={svgMap[type]}/>
        <img 
         alt="heart"
          src={heart}
          style={{ width: 10 + 10 * clicks + 'px'}}/>
    </div>
    );

}

export default ItemShow;