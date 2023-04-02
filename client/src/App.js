import React , {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {NavBar} from './components/navBar';
import {Banner} from './components/Banner';
import {Pictures} from './components/pictures';
import { Contact } from "./components/DropBox";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return(
<div className="App">
<NavBar />
<Banner />
<Pictures />
<Contact />
</div>
  );
}
/*
function App() {

  const [backendData, setbackendData] = useState([{}])
  useEffect(()=> {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setbackendData(data)
      }
    )
  },[])
  return (
    <div>
        {(typeof backendData.users === 'undefined' ) ? (
          <p>Loading...</p>

        ): (
          backendData.users.map((user,i) => (
            <p key={i}>{user}</p>
          ))
        )}
    </div>
  )
} 
*/

export default App