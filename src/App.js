import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  // https://fakestoreapi.com/products
  const [apiData, setApiData] = useState([])

  useEffect(()=> {
    apiStoreData()
  },[])
  const apiStoreData = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    // console.log(response)
    const data = await response.json()
    // console.log(data)
    setApiData(data)
  }
  return (
    <>
      <h2>API Store Project</h2>
      <div className='container'>
        {apiData.map((values)=>{
          return(
            <>
              <div className='box'>
                <div className='content'>
                  <h5>{values.title}</h5>
                  <p>{values.description}</p>
                </div>
                <img src={values.image} alt="product image"/>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default App;
