

import React,{useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const tooglemode=()=>{
    if(mode==="light"){
      SetMode("dark")
      document.body.style.color="white"
      document.body.style.backgroundColor="#103765";
      let soorya=document.querySelector(".sun")
      soorya.innerHTML="🌞"
      showAlert("Dark mode has been Activated","primary")

    }
    else{SetMode('light')
    document.body.style.color="black"
    document.body.style.backgroundColor="white"
    let soorya=document.querySelector(".sun")
    soorya.innerHTML="🌝"
    showAlert("Light mode has been Activated","warning")


  }
  }
  const[mode,SetMode]=useState("light")
  // ALert message

const [alert, setalert]=useState(null)
const showAlert=(message,type)=>{
  setalert({
    message:message,
    type:type
  })
  setTimeout(() => {setalert(null)}, 2000);
}
  return (
    <>
<Navbar Logo="HAreeSH" About="About Me" getintouch="✈️ Get in touch" darkORlight={mode} toggle={tooglemode}/>
  <Alert alert={alert}/>
<div className="container">
  <Textform title="Case Converter" darkORlight={mode} showAlert={showAlert}/>
</div>
</>
  );
}
export default App;
