import './App.css';
import { useState } from 'react';
import ListItem from './ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


function App() {

  const initialList = [
    {
      id: 1,
      itemName: "Item 1",
      qty: 1,
      checked: false
    },
    {
      id: 2,
      itemName: "Item 2",
      qty: 5,
      checked: true
    },
  ]

  const [itemList, setItemList] = useState(initialList);
  const [itemEntered, setItemEntered] = useState("");

  const addItem = () => {
    console.log(itemEntered)

    let currentItem = {
      id: itemList.length + 1,
      itemName: itemEntered,
      qty: 1,
      checked: false
    };

    let newItemList = [
      ...itemList,
      currentItem
    ];

    setItemList(newItemList);
    setItemEntered("");
  }

  const handleInputChanged = (e) => {
    setItemEntered(e.target.value);
  }

  const handleQtyIncrease = (id) => {
    const newList = [...itemList];
    newList[id].qty++;
    setItemList(newList);
  }

  const handleQtyDecrease = (id) => {
    const newList = [...itemList];
    newList[id].qty--;
    setItemList(newList);
  }
  
  return (
    <div className='container'>
      <h1>Shopping List</h1>


      <div className='inputBox'>
        <input name="Item" placeholder="Add an item" value={itemEntered} onChange={handleInputChanged} ></input>
        <FontAwesomeIcon icon={faPlus} className="faIconAdd" onClick={() => addItem()}/>
      </div>
      {
        itemList.map( (item, idx) => (
          <ListItem item={item} key={idx} idx={idx} handleQtyIncrease={handleQtyIncrease} handleQtyDecrease={handleQtyDecrease} />
        ))
      }

    </div>
  );
}

export default App;
