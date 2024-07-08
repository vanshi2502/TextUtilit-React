
import './App.css';
import Abouts from './components/Abouts';
import Navbar from'./components/Navbar';
import React, { useState } from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[darkMode,setDarkMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
   setAlert({
    msg:message,
    type:type
   })
   setTimeout(()=>{
    setAlert(null);

   },3000);
   
  }
  const toggleMode=()=>{
  if(darkMode==='light'){
    setDarkMode('dark');
    document.body.style.backgroundColor='black';
  showAlert("dark mode has been enabled","success");
  document.title='TextUtils- Dark Mode';
  }
  
  else{
    setDarkMode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode has been enabled","success");
    document.title='TextUtils- Light Mode';
  }
}
  return (
    <>
<Navbar title="TextUtils" aboutTexts="About TextUtils" mode={darkMode} toggleMode={toggleMode}/>
<div className="conatiner my-3">
<Alert alert={alert}/>

<TextForm showAlert={showAlert}heading="Enter the text to analyze below" mode={darkMode}/>


</div>


    </>
  );
}

export default App;
