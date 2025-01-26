import { useState } from "react";
import "./App.css";
import CardOrganism from "./components/__organism/Card/CardOrganism";
import ThankOrganism from "./components/__organism/Thanks/ThankOrganism";

function App() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0); 

  return (
    <>
      {show ? (
        <CardOrganism show={setShow} setCount={setCount} />
      ) : (
        <ThankOrganism count={count} />
      )}
    </>
  );
}

export default App;
