import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

//let name="Darshan";
function App() {
  const [mode,setMode]=useState('light');//toggle for dark/light
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
      setAlert({
          message:message,
          type:type
      })
      setTimeout( ()=>{
          setAlert(null)
      },900);
  }
  const toggleMode= ()=>{
      if(mode==='light'){
          setMode('dark')
          document.body.style.backgroundColor='black'
          showAlert("Dark Mode Enabled","success");
          document.title='TextUtils [Dark] - Home';
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert("Light Mode Enabled","success");
        document.title='TextUtils [Light] - Home';
        
      }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About"  mode={mode} toggleMode={toggleMode} />
      {/* this is navabr component */}
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze Below" mode={mode} showAlert={showAlert}/>
          {/* <Switch>
              <Route exact path="/about">
                <About/>
              </Route>
          
              <Route exact path="/">
              
              </Route>
            </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
