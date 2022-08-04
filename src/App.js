import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
function App() {
  const [mydesign, setmydesign] = useState({
        color:'black',
        backgroundColor:'white',
         height: '100vh',
    })
   const darkmode=()=>{
      if(mydesign.color==='black'){
        setmydesign({
          color:'white',
          backgroundColor:'#042743',
          height: '100vh',
        })
        settext("Disable Dark Mode")
        setmode('dark')
        showAlert("Enabled Dark Mode","success")
        
      }
      else if(mydesign.backgroundColor==='#8f0815'){
        setmydesign({
          color:'#dde5e7',
          backgroundColor:'#042743',
          height: '100vh',
        })
        settext("Disable Dark Mode")
        setmode('dark')
        showAlert("Enabled Dark Mode","success")
  
      }
      else if(mydesign.color==='#dde5e7'){
        setmydesign({
          color:'#dde5e7',
          backgroundColor:'#8f0815',
          height: '100vh',
        })
        settext("Enable Dark Mode")
        setmode('secondary')
        showAlert("Disabled Dark Mode","success")
        
      }
        else{
         setmydesign({
          color:'black',
          backgroundColor:'white',
          height: '100vh',
        })
        settext("Enable Dark Mode")
        setmode('light')
        showAlert("Disabled Dark Mode","success");
       
        }
      }
      const bred=()=>{
        if(mydesign.color==='black'){
         setmydesign({
          color:'white',
          backgroundColor:'#8f0815',
          height: '100vh'
         })
         setmode('secondary')
          }
          else if(mydesign.backgroundColor==='#042743'){
            showAlert("Cannot activate,Because you are in dark mode","warning");
          }
          else{
            setmydesign({
          color:'black',
          backgroundColor:'white',
          height: '100vh',
              })
              setmode('light')
          }}
    const showAlert=(message,type)=>{
            setAlert({
              message:message,
              type:type
            })
            if(message==="Only 5 Fonts are Avaliable"){
            setTimeout(() => {
              setAlert(null)
            }, 1500);}
            else if(message==="Cannot activate,Because you are in dark mode"){
            setTimeout(() => {
              setAlert(null)
            }, 1500);}
            else{
              setTimeout(() => {
              setAlert(null)
            },800);
            }
      }
       const [mode, setmode] = useState('light')
       const [text, settext] = useState("Enable Dark Mode")
       const [alert, setAlert] = useState(null)
  return (
    <div style={mydesign}>
    <Navbar title="TextEditor" mode={mode} effect={darkmode} change={text} Tored={bred}/>
    <Alert Alert={alert}/>
    <div className="container">
      <Textarea heading="Enter your text to Analyze:" showAlert={showAlert}/>
    </div>
    </div>
  );
}

export default App;
 