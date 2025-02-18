import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [fake, setFake] = useState([])
  console.log(fake);

  useEffect(()=>{
    fakestore()
  },[])

  const fakestore= async()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log(response)
    const jsonData = await response.json();
    // console.log(jsonData)
    setFake(jsonData)
  }

  return (
    <>
      <div>
        <div className='list'>
          <li>Home</li>
          <li>contact</li>
          <li>Services</li>
          <li>Contacts</li>
          <li>Project</li>
          <li>Experience</li>
        </div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      <h2>FAKE Apis</h2>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {fake.map((values)=>{
        return (
          <div className='content'>
            <p className=''> {values.title}</p>
            <h3>{values.description}</h3>
           <img src={values.image} alt="" />
           <button className='btn'> ORDER NOW</button>
          </div>
          
        )
      })}
    </>
  )
}

export default App
