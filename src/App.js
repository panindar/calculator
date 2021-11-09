import React,{ useState } from 'react';
import './App.css';

const App = () =>  {
 const [result, setResult] = useState("");

 const onclear = () => {
   setResult("");
 }
 const onbackspace = () => {
  setResult(result.slice(0, -1));
 }
 const calculate = () => {
   try {
     //eslint-disable-next-line
    setResult(eval(result).toString());
   } catch (err) {
     setResult("Error");
   }
 }
 const handleonclick = (e) => {
   setResult(result.concat(e.target.name))
 }
  return (
    <div className="container">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keypad">
      <button onClick = {onclear} id='clear' className="highlight" > Clear </button>
      <button onClick = {onbackspace} id='backspace' className="highlight" > C </button>
      <button name="/" onClick = {handleonclick} className="highlight"> &divide;  </button>
      <button name="7" onClick = {handleonclick}> 7 </button>
      <button name="8" onClick = {handleonclick}> 8 </button>
      <button name="9" onClick = {handleonclick}> 9 </button>
      <button name="*" onClick = {handleonclick} className="highlight"> &times;</button>
      <button name="4" onClick = {handleonclick}> 4 </button>
      <button name="5" onClick = {handleonclick}> 5 </button>
      <button name="6" onClick = {handleonclick}> 6 </button>
      <button name="-" onClick = {handleonclick} className="highlight"> &ndash;</button>
      <button name="1" onClick = {handleonclick}> 1 </button>
      <button name="2" onClick = {handleonclick}> 2 </button>
      <button name="3" onClick = {handleonclick}> 3 </button>
      <button name="+" onClick = {handleonclick} className="highlight"> + </button>
      <button name="0" onClick = {handleonclick}> 0 </button>
      <button name="." onClick = {handleonclick}> . </button>
      <button name="=" onClick = {calculate} id="result" className="highlight" > = </button>
      </div>
    </div>
  );
}

export default App;
