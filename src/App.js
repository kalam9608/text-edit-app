import React, { useState } from 'react'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import Textform from './components/Textform'

const App = () => {
  const [mode,setMode]=useState("light")  // this is for navbar
   const [text, setText] = useState("Enable darkMode");  // this is for switch buttom
   const [TextColor, setTextColor] = useState("dark");  // this is for siwtch buttom textcolor

   const [alert, setAlert] = useState(null)   // this is for alert

 
   const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }


  const togle=()=>{
    if(mode==="light"){
    document.body.style.backgroundColor='#042743'

      setMode("dark")
      setText("Enable lightMode")
      setTextColor("light");

  
        showAlert("Enable to darkMode","success");

        document.title="text utils light Enable"
     

    }else{
    document.body.style.backgroundColor='white'
      setMode("light")
      setText("Enable darkMode")
      setTextColor("dark");
      showAlert("Enable to lightMode","success")

    }
  }
  return (
    <>
    <Navbar mode={mode}  togle={togle} text={text} TextColor={TextColor}/>
     <Alert alert={alert} />

    <div className="container">

    <Textform  mode={mode} alert={showAlert}/>
    </div>
    </>
    
  )
}

export default App