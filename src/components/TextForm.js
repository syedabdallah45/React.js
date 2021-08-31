import React, { useState } from 'react'


export default function TextForm(props) {
  
    const handleUpClick = () => {
        console.log('uppercase was clicked');
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        console.log('lowercase was clicked');
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted to lowercase", "success")
    }

    const handleClearClick = () => {
        console.log('clear');
        let newText ='';
       
        setText(newText);
       props.showAlert("Text has been cleared", "success")
    }

    const handleCapitalClick = () => {
        console.log('clear');
    let newText= Text.charAt(0).toUpperCase() + Text.slice(1);
    setText(newText)
       props.showAlert("capitalize first letter", "success")
    }
      

        
    
    const handleOnChange = (event) => {
        console.log('handle on change ')
        setText(event.target.value)
    }
    const [Text, setText] = useState('black')
    // setText('enter the value');
    
    return (
        <>


            <div className=" container mb-3 my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
               
                <textarea className="form-control" value={Text} onChange={handleOnChange} id="area" rows="8" style={{backgroundColor: props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
                <button className='btn btn-primary' onClick={handleUpClick}>convert to uppercase</button>
                <button className='btn btn-primary mx-3 my-3' onClick={handleLoClick}>convert to lowercase</button>
            
                <button className='btn btn-primary mx-3 my-3' onClick={handleCapitalClick}>Capital</button>
                <button className='btn btn-primary mx-3 my-3' onClick={handleClearClick}>Clear</button>
            </div>

            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>your text summary</h1>
                <p>{Text.split(" ").length} words and {Text.length} characters</p>
                <p>{0.008 * Text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{Text}</p>
            </div>
        </>
    )
}
