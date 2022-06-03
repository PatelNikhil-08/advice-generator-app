import React, { useEffect, useState } from "react";
import Advice from './Component/Advice';
import './App.css'; 
function App() {

  const[advice, setAdvice] = useState(""); 
  const[adviceId, setAdviceId] = useState(); 


  const baseurl = "https://api.adviceslip.com/advice"; 

  useEffect(() => {
    getData(); 
  }, [])

  async function getData(){
    const response = await fetch(baseurl); 
    const data = await response.json(); 
    console.log(data.slip.advice); 
    setAdviceId(data.slip.id);
    setAdvice(data.slip.advice); 
  }

  return (
    <div className="App">
      <Advice number={adviceId} quote={advice}/>
    </div>
  );
}

export default App;
