import 'bulma/css/bulma.css';
import { useState } from 'react';
import ItemShow from './ItemShow';

function getRandomItem() {
    const items = ['plate', 'spoon', 'cup', 'mug']

    return items[Math.floor(Math.random() * items.length)]
}



function App() {

    const [items, setItems] = useState([]);

    const handleClick = () => {
         setItems([...items, getRandomItem()] )
    };

    const renderedItems = items.map((item, index) => {
     return <ItemShow type={item} key={index} />
    });

    return (
        <div>
            <button onClick={handleClick} className="button">Add Item</button>
            <div>
                {renderedItems}
            </div>
        </div>
    )
}

export default App;

