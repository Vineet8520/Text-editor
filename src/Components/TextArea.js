import React , {useState} from 'react'



export default function TextArea() {
  //Defining text state, setText is function which will be used to update the state
    const [text , setText] = useState('enter text here');
    // setText('new text');
    const upperCase = ()=>{
        console.log("UPPERCASE BTN CLICKED");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const lowercase = ()=>{
      
      let newText = text.toLowerCase();
      setText(newText)
  }
  const reset = ()=>{
    
    let newText = "";
    setText(newText)
}

    const changeText = (event)=>{
      setText(event.target.value);
    }
  return (
    <div>
        <div className='container'> 
            <div className="mb-1 my-5">
            <textarea className="form-control" value={text} onChange={changeText} id="exampleFormControlTextarea1" rows="12"></textarea>
      <button type="submit" onClick={upperCase} className="btn  btn-outline-primary my-3 mx-1">Uppercase</button>
      <button type="submit" onClick={lowercase} className="btn  btn-outline-success my-3 mx-1">Lowercase </button>
      <button type="submit" onClick={reset} className="btn  btn-outline-danger my-3 mx-1">Reset</button>

            </div>
        </div>
    </div>
  )
}

 