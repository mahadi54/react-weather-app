import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
 
  const [city, setCity] = useState('')
  const [input, setInput] = useState('')

  useEffect(()=>{
    const API_KEY = '59c7a80b65c59756869481e0556c4d10'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => setCity(data))
  

  }, [input])

  const handleChange = (e)=>{
    setInput(e.target.value)

  }

  const handleClick = (e)=>{
    e.preventDefault();
    console.log(city)

  }

  
  return (
    <div className='container h-screen w-screen'>
         <form class="col-md-6 m-auto py-5">
            <div class="input-group mb-3">
                <input onChange={handleChange} id="city-name" type="text" class="form-control" placeholder="Enter a location for Weather ..."/>
                <div class="input-group-append">
                    <button  onClick={handleClick} type="submit" class="btn btn-danger ml-2 bg-blue-800 font-bold">Search</button>
                </div>
            </div>
        </form>
        {!city.name ? (
          <p className='text-center text-white font-bold'>No Data Found</p>
        ):
        (
          <div id="weather-status" class="weather-status text-white">
          
          <img id="weather-icon" src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt=""/>
          <h1 className='city text-2xl'>{city.name}</h1>
          <h3 className='city text-xl'><span className='city text-2xl text-bold'  id="temperature">{city.main.temp}</span> &deg;C</h3>
          <h1 id="condition" class="lead text-2xl">{city.weather[0].description}</h1>
          <p className='text-xl text-yellow-200 mt-2'>Max temperature: {city.main.temp_max} </p>
          <p className='text-xl text-yellow-300'>Min temperature: {city.main.temp_min} </p>
           
         
         
      </div>
        )
        }
       
    </div>
  )
}

export default App