import './App.css';
import { useState, useEffect } from 'react';
const axios = require('axios').default;

function App() {

  const [quote, setQuote] = useState("");
  const url = "https://api.adviceslip.com/advice";

  useEffect(() => {
    getSetQuote();
  }, [])

  const getSetQuote = () => {
    axios.get(url)
    .then(res => {
      const newQuote = res.data.slip.advice;
      setQuote(newQuote);
    })
  }

  return (
   <div className="container">
     <div className="quoteBox">
       <h3>{quote}</h3>
       <button onClick={() => getSetQuote()}>Next Quote !!</button>
     </div>
   </div>
  );
}

export default App;
