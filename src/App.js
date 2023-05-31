import React, {useState} from 'react'
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import Alert from "./components/Alert"
// import About from "./components/About"
import './App.css';



export default function App(){
  const [mode, setMode] = useState("light")
  const [alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    }, 1800)
  }
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#051832";
      showAlert("Dark Mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
      setInterval(() => {
        document.title = "TextUtils is Amazing Mode"
      }, 1000);
      setInterval(() => {
        document.title = "Install TextUtils Now"
      }, 1400);
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"

    }
  }
    return (
      <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">        
          <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below" />
          {/* <About/> */}
        </div>
      </>
    )
}