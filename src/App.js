
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert  from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
 const [mode, setMode] = useState('light')
const [alert, setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type,

  })
  setTimeout(() => {
    setAlert(null);
  }, 3000);
}


 const toggleMode=()=>{
   if(mode === 'light'){
     setMode('dark')
     document.body.style.backgroundColor='black'
     showAlert("Dark mode has been enabled", "success")
   }
   else{
     setMode('light')
     document.body.style.backgroundColor='white'
     showAlert("Light mode has been enabled", "success")
   }
 }
 const toggleMode2=()=>{
  if(mode === 'light'){
    setMode('success')
    document.body.style.backgroundColor='green'
    showAlert("Green mode has been enabled", "success")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enabled", "success")
  }
}
  return (
   <>
   <Router>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}  toggleMode2={toggleMode2}
    aboutText="About Textutils"/>
    <Alert alert={alert}/>
    <div className="container">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
         
          <Route exact path="/">
          <TextForm heading='Enter the Text here' showAlert={showAlert} mode={mode}/>
          </Route>
        </Switch>
    {/* <Navbar/> */}
    
   
    </div>
    </Router>

    </>
         );
}

export default App;
