import React,{useState} from 'react'


export default function  TextForm (props) {
    
    const handleUpClick=()=>{
       // console.log("Uppercase was clicked"+ text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!","success");
    }
    const handleUpClicke=()=>{
        // console.log("Uppercase was clicked"+ text);
         let newText= text.toLowerCase();
         setText(newText)
         props.showAlert("converted to lowercase!","success");
     }
    const handleOnChange=(event)=>{
      //  console.log("on change");
        setText(event.target.value);

    }
    const handleOpClick=()=>{
        let newText="";
          setText(newText);
          props.showAlert("text has been cleared ","success");
      }
    const[text,setText]=useState('');
   // setText("gungun");
    return (
        <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>
            {props.heading}
        </h1>
  <div className="mb-3">
   
    <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.darkMode==='white'?'black':'white',color:props.darkMode==='dark'?'white':'black'}}id="myBox" rows="3"/>
   </div> 
   <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
   <button className="btn btn-primary mx-2" onClick={handleUpClicke}>Convert to Lowercase</button>
   <button className="btn btn-primary mx-2" onClick={handleOpClick}>Clear Text</button>
  </div>
  <div className="container my-3">
  <h1> your text summary</h1>
  <p>{text.split(" ").length} words and {text.length}  characters</p>
  <p>{0.008* text.split(" ").length}Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
  </div>
  </>
    )
}
