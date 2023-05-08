import { useRef,useState } from "react";
const Calculator=()=>{
  const valueRef=useRef(null);
  // const resultRef=useRef(null);
  const[result,setResult]=useState(0);
  const add=(event)=>{
    event.preventDefault();
    setResult((result)=>result+Number(valueRef.current.value))
  }
  const subtract=(event)=>{
    event.preventDefault();
    setResult((result)=>result-Number(valueRef.current.value))
  }
  const divide=(event)=>{
    event.preventDefault();
    setResult((result)=>result/Number(valueRef.current.value))
  }
  const multiply=(event)=>{
    event.preventDefault();
    setResult((result)=>result*Number(valueRef.current.value))
  }
  const resetInput=(event)=>{
    event.preventDefault()
    valueRef.current.value=0;
  }
  const resetResult=(event)=>{
    event.preventDefault();
    setResult((prevValue)=>prevValue*0);
  }

  return(
    <div className="container" id="main">
      <div className="card">
        <div className="card-header">
          <h1 className="text-center">React Calculator</h1>
        </div>
        <div className="card-body">
          <h2 className="text-center" >Result:<span className="text-warning">{result}</span></h2>
          <form>
            <input type='number' ref={valueRef} 
            className="form-control"  pattern="[0-9]" 
            placeholder="Type Number"/>
            <div className="d-flex justify-content-evenly mt-3">
              <button type="submit" className="btn btn-primary btn-sm"
                onClick={add}>Add</button>
              <button type="submit" className="btn btn-secondary btn-sm"
                onClick={subtract}>Subtract</button>
              <button type="submit" className="btn btn-success btn-sm"
                onClick={divide}>Divide</button>
              <button type="submit" className="btn btn-warning btn-sm"
                onClick={multiply}>Multiply</button>
              <button type="submit" className="btn btn-danger btn-sm"
                onClick={resetInput}>Input Reset</button>
              <button type="submit" className="btn btn-danger btn-sm"
                onClick={resetResult}>Result Reset</button>
            </div>
          </form >
        </div>
      </div>
    </div>
  )
}
export default Calculator;