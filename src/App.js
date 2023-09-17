import React, {useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('Pippi');

  const onSubmit = () => {
    alert("Good! Submitted. 😂")
  };

  const onKeyUpEnter = (event) => {
    if (event.keyCode === 13) {
      onSubmit();
    }
  }

// let text = 'Pippi'

  const upDateText = () => {
    // text = "Frontend Developer";
    console.log(text);
    setText('Frontend Developer') 
  }

  return (
  <div >
    <div className='container'>Frontend Developer Pippi 
      <br></br>
      <input onKeyUp={onKeyUpEnter}/>
      <button onClick={onSubmit}>
        Submit
      </button>

      <br /><br/>

    <span>{text}</span>
    <button onClick={upDateText}>Update</button>


      </div>
  </div>
  );
}
export default App;
