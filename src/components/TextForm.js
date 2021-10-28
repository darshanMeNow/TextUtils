import React, { useState } from 'react'

export default function TextForm(props) {

    const [text,setText]=useState('')//this is react hook state for text

    const handleUpClick=()=>{
        //console.log("Uppercase was clicked")
        let newUpperText=text.toUpperCase()
        setText(newUpperText)//this  is how text is changed in react ..you cant do text="dfd"
        props.showAlert("Converted to Uppercase","success");
        
    }

    const handleLoClick=()=>{
        //console.log("Uppercase was clicked")
        let newLowerText=text.toLowerCase()
        setText(newLowerText)
        props.showAlert("Converted to Lowercase","success");
        
    }

    const handleOnChange=(event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }
    
    
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>Total {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length} minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in textbox to preview here"}</p>
        </div>
        </>
    )
}
