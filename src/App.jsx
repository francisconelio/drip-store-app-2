import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  
  const buscarProdutos = async () => {
    const [data,setData] = useState([])
   /* const response =  await fetch('http://localhost:5000/produtos')
    console.log(await response.json())*/

    const response = await axios.get("http://localhost:5000/produtos")
    console.log('response',response.data)
    setData(response.data);
  };

  useEffect (() =>{
    buscarProdutos()
  }, []);

  return (
    <>
      {JSON.stringify(data)}
    </>
  )
}

export default App
