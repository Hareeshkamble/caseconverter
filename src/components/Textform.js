import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
  const speak=()=>{
    let msg=new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg)
  props.showAlert("voice overn has been started","success")

    }
  const reverse=()=>{
  let  reversed=text.split("").reverse().join("")
  SetText(reversed)
  props.showAlert("Text has been reversed","success")

  }
    const changedtoUppercase=()=>{
    let upper=text.toUpperCase()
    SetText(upper)
  props.showAlert("Text has been coverted to UPPERCASE","success")

    }
    const clear=()=>{
      SetText(" ")
      props.showAlert("Text-area has been cleared","success")
    }
    const changedtoLowercase=()=>{
        let lower=text.toLowerCase()
        SetText(lower)
        props.showAlert("text has been changed LowerCase","success")
    }
    const onchanged=(event)=>{
SetText(event.target.value)
    }
    const [text,SetText]=useState("")
  return (
    <>
    <div className="container">
        <h1 className='text-center'>{props.title}</h1>
        <div className="mb-3 py-5 " >
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea placeholder='Enter Something ' className="form-control" id="exampleFormControlTextarea1" rows="6" value={text} onChange={onchanged} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} ></textarea>
  <button className='btn bg-warning ' onClick={changedtoUppercase}>UPPER CASE</button> 
  <button className='btn bg-warning  my-3' onClick={changedtoLowercase}> lower case</button>
  <button className='btn bg-warning  my-3' onClick={reverse}>Reverse</button>
  <button className='btn bg-warning  my-3' onClick={speak}>Speak 🔊</button>

  <button className='btn bg-warning  my-3' onClick={clear}>Clear</button>

</div>
<p className='py-1'>words {text.split(" ").length-1} and {1000-text.length-1} Characters remains</p>
<h2>Preview</h2>
<pre>{text.length <= 0 ? "Type something to get a preview" : text} {text}</pre>

</div>
    </>
  )
}
Textform.propTypes={
title:PropTypes.string
}
