import React,{useState} from 'react'
export default function Textarea(props) {
    const handleupclick=()=>{
          let newtext=text.toUpperCase();
          settext(newtext);
          props.showAlert("Converted to Uppercase","success")
    }
     const handleloclick=()=>{
          let newtext=text.toLowerCase();
          settext(newtext);
          props.showAlert("Converted to Lowercase","success")
    }
    const handleclear=()=>{
          let newtext='';
          settext(newtext);
          props.showAlert("Text Cleared","success")
    }
   const handlecopy=()=>{
          let newtext=document.getElementById("mytext");
          newtext.select()
           navigator.clipboard.writeText.style={style};
          navigator.clipboard.writeText(newtext.value);
          document.getSelection().removeAllRanges()
           props.showAlert("Text Copied","success")
    }
    const handlespaces=()=>{
          let newtext=text.split(/[ ]+/);
          settext(newtext.join(" "));
          props.showAlert("Extra Spaces Are Removed","success")
    }
     let counter=() => {
         if(count<5){
         setCount(count + 1)
         }
         else{
             setCount(0)
         }
        changeStyle(count)}
    const changeStyle=(x)=>{
        if(x===1){
            setstyle({fontFamily:'fantasy'})
            props.showAlert("Font Changed","success")
        }
        else if(x===2){
             setstyle({fontFamily:'cursive'})
             props.showAlert("Font Changed","success")
        }
        else if(x===3){
             setstyle({fontFamily:'Lucida Handwriting'})
             props.showAlert("Font Changed","success")
        }
        else if(x===4){
             setstyle({fontFamily:'GungsuhChe'})
             props.showAlert("Font Changed","success")
        }
        else if(x===5){
             setstyle({fontFamily:'Brush Script MT'})
             props.showAlert("Font Changed","success")
        }
        else{
             setstyle({fontFamily:'Georgia'})
             props.showAlert("Only 5 Fonts are Avaliable","success")
        }
    }
    const change=(event)=>{
       settext(event.target.value);
    }
    const [text, settext] = useState('ENTER TEXT HERE');
     const [count, setCount] = useState(1);
    const [style, setstyle] = useState({
        fontFamily: 'Georgia'})
    return (
        <div>
           <div className="mb-3">
               <h1>{props.heading}</h1>
             <textarea className="form-control" id="mytext" onChange={change} value={text} rows="10" style={style}></textarea>
             </div>
             <button disabled={text.length===0} type="button" className="btn btn-dark mx-2 my-2" onClick={handleupclick}><i>Covert to Uppercase</i></button>
             <button disabled={text.length===0} type="button" className="btn btn-dark mx-2 my-2" onClick={handleloclick}><i>Covert to Lowercase</i></button>
             <button disabled={text.length===0} type="button" className="btn btn-dark mx-2 my-2" onClick={handleclear}><i>Clear Text</i></button>
             <button disabled={text.length===0} type="button" className="btn btn-dark mx-2 my-2" onClick={handlecopy}><i>Copy Text</i></button>
             <button disabled={text.length===0} type="button" className="btn btn-dark mx-2 my-2" onClick={handlespaces}><i>Remove Extra Spaces</i></button>
            <button disabled={text.length===0} type="button" className="btn btn-dark mx-2 my-2" onClick={counter} ><i>Change Font </i></button>
             <div className="container" >
               <p>{text.length>0?<p style={{fontSize:'22px',color:'#0a5a6a'}}><i>The Font of the text is "<b><i>{style.fontFamily}</i></b>"</i></p>:" "}</p>
                 <h3><b>Preview</b></h3>
                  <p><i>{text.length>0?text:"Enter Text To Preview!"}</i></p>
                 <b>{text.split(/\s+/).filter((variable)=>{return variable.length!==0}).length}</b><i> words and </i><b>{text.length}</b> <i>characters</i>
                <p> <b>{0.008*text.split(/\s+/).filter((variable)=>{return variable.length!==0}).length}</b> <i>Minutes to Read</i> </p>
             </div>
        </div>
    )
}
