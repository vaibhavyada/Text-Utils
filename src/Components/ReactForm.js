import React,{useState} from 'react'

export default function ReactForm(props) {

    const handleUPclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text,setText] = useState("Enter Text Here");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="mybox" className="form-label">Enter the text</label>
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2"  onClick={handleUPclick}>Convert to Upper-Case</button>
        <button className="btn btn-primary mx-2"  onClick={handleLoclick}>Convert to Lower-Case</button>
    </div>
    <div className="container" mb-4>
        <h1>Your Text Summary</h1>
        <p>
            {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>
            { 0.008 * text.split(" ").length} minutes to read.
        </p>
        <h2>Preview</h2>
        <p>
            {text}
        </p>
    </div>
    </>
    
  )
}
