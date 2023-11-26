import React, {useEffect, useState} from "react";

import "./App.css";
import Layout from "./components/Layout/Layout";


function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])



  return (


    <div>
    <Layout />


    {(typeof backendData.users === 'undefined') ? (
      <p>Loading...</p>
    ) : (
      backendData.users.map((user, i) => (
        <p key={i} >{}</p>
      ))
    )}

    </div>

  )
  

  
}

export default App;
