import './App.css';
import { useState } from 'react';

function App() {

  const list = [
    {name: "Sahil", age: 24},
    {name: "Saheb", age: 23},
    {name: "Akshay", age: 31},
    {name: "Tania", age: 29}
  ];

  const [filteredList, setFilteredList] = useState(list);

  const inputHandler = e => {
    let textEntered = e.target.value;
    if(textEntered.length === 0){
      setFilteredList(list)
    } else {
      let tempList = filteredList.filter(item => item.name.includes(textEntered));
      setFilteredList(tempList);
    }

  }

  return (
    <div className="container">
      <h1>Search Filter Application</h1> 
      
      <input name="name" type="text" placeholder='Enter text to filter name'
      onChange={inputHandler}></input>

      <ul>
        {filteredList.map((item, index) => (
          <li key={index}> {item.name}, {item.age} </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
