import { useState } from "react"

const Textform = (props) => {
    const [text,setText]=useState(" ")


    const convertUpText=()=>{

        let newtext=text.toUpperCase();
        setText(newtext);

        props.alert("convert to upperCase","success")
    }

    const convertLoText=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const clearText=()=>{
        console.log("clearText is fired")

        setText(" ");
    }

    const changeText=(event)=>{
        console.log("change on");
        setText(event.target.value)
    }

  return (
 <>
    <div className="heading" style={{color:props.mode==="light"?'black':'white'}}>
    <h2>Text utlis</h2>
    </div>
<div className="mb-3">
  <textarea className="form-control" style={{background:props.mode==="light"?'white':'grey',color:props.mode==="light"?'black':'white'}} value={text} onChange={changeText} id="text" cols="2" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1"  onClick={convertUpText}>Conver to upperCase</button>
<button className="btn btn-primary mx-1 my-1" onClick={convertLoText}>Conver to lowerCase</button>
<button className="btn btn-primary mx-1 my-1" onClick={clearText}>ClearText</button>


<div className="container" style={{color:props.mode==="light"?'black':'white'}}>
    <h1>text summary</h1>
    <p>{text.split(" ").filter((Element)=>Element).length} words and {text.length} chracters</p>
    <p>{0.008 * text.split(" ").length} minutes read words</p>

    <h2>prevew</h2>
    <p>{text}</p>
</div>
 </>
  )
}

export default Textform