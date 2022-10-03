import {  Card, Page, TextField } from "@shopify/polaris";
import { useMemo, useState } from "react";
import "./App.css";
import "@shopify/polaris/build/esm/styles.css";
function App() {
  const [inp1, setInp1] = useState(0);
  const [inp2, setInp2] = useState(0);
  const [add, setAdd] = useState(0);
  const [clr, setClr] = useState("#00634A");

  const addition = ()=>{
    console.log("Addition function")
    setAdd(Number(inp1) + Number(inp2));
  };

  const toggle =()=>{
    if(clr === "#00634A"){
      setClr("#D82C0D")
    }
    else{
      setClr("#00634A")
    }
  }

  const multiply = useMemo(()=>{
    console.log("Multiply function")
    return (Number(inp1) * Number(inp2));
  },[inp1,inp2]);

  return (
    <Page>
      <Card sectioned>
        <TextField
          label="Enter number 1"
          value={inp1}
          onChange={(e) => {
            setInp1(e);
          }}
          autoComplete="off"
        />
        <TextField
          label="Enter number 2"
          value={inp2}
          onChange={(e) => {
            setInp2(e);
          }}
          autoComplete="off"
        />
        <p>Multiply : {multiply}</p>
        <p>Addition : {add}</p>

        <button onClick={addition}>Addition </button>
        &nbsp;&nbsp;
        <button style={{backgroundColor:clr}} onClick={toggle}>Toggle </button>
      </Card>
    </Page>
  );
}

export default App;
