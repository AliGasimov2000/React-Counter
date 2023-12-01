import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";

function App() {
  const [number,setNumber] = useState(0)

  return (
    <>
      <p>{number}</p>
      <button onClick={()=>setNumber(number+1)}>click</button>

      <Button content={{color:'red'}}/>
    </>
  );
}

export default App;
