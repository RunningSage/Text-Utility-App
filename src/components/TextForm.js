import React, {useState} from "react"

export default function TextForm(props){
  const [text,setText] = useState("Enter text here")
  const handleUpClick=()=>{
    console.log("Uppercase was clicked")
    setText(text.toUpperCase())
    props.showAlert("Converted to Uppercase","success")
  }
  const handleLoClick=()=>{
    console.log("Lowercase was clicked")
    setText(text.toLowerCase())
    props.showAlert("Converted to Lowercase","success")
  }
  const handleOnChange=(event)=>{
    console.log("On change")
    setText(event.target.value)
  }
  const handleClearClick=()=>{
    setText("")
    props.showAlert("Text Cleared","success")

  }
  const handleCopy=()=>{
    var text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to Clipboard","success")

  }
  const handleExtraSpaces=()=>{
    setText(text.split(/[ ]+/).join(" "))
    props.showAlert("Extra spaces removed","success")
  }

  return (
  <>  
  <div  className="container" style={{color : (props.mode === "dark" ? "white":"black")}}>
    <h1>{props.heading}</h1>
  <div className="mb- 3">
    <textarea style={{backgroundColor : (props.mode === "light" ? "white":"#0b2b5a"),color : (props.mode === "dark" ? "white":"black")}} value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
  </div>
    <button onClick={handleUpClick} className="my-3 mx-1 btn btn-primary">Convert to Uppercase</button>
    <button onClick={handleLoClick} className="my-3 mx-1 btn btn-primary">Convert to Lowercase</button>
    <button onClick={handleClearClick} className="my-3 mx-1 btn btn-primary">Clear</button>
    <button onClick={handleCopy} className="my-3 mx-1 btn btn-primary">Copy</button>
    <button onClick={handleExtraSpaces} className="my-3 mx-1 btn btn-primary">Remove extra spaces</button>
  </div>
  <div style={{color : (props.mode === "dark" ? "white":"black")}} className="container my-3">
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : "Nothing to preview"}</p>

  </div>
  </>
  )}