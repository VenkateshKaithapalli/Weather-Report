import axios from 'axios';
import React, { useState } from 'react'

const Report = () => {
    const[value,setValue]=useState('');
    const[temp,setTemp]=useState('');
    const[humi,setHumi]=useState('')

    const submitHandler=(e)=>{
       
        e.preventDefault()
        if(!value) return;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=943740fd96e7e9c2844f0cf8fd80fd54`)
        .then(res=>
            {
               return(
         setTemp(` Temparature of ${value}
         ${Math.round(res.data.main.temp-273.15)} °C`),

        //  setTemp('Temparature of '+''+value+/\n/+Math.round(res.data.main.temp-273.15)+'°C'),
         setHumi(` humidity : ${res.data.main.humidity}`)
         
               )
            
        
            }
                
        )
        .catch(
            err=>console.log(err)
        )

    }
  return (
    <div className='card '>
        <div className='card-body w-100'>
            <h2 className='card-title text-success'> Weather Report Application</h2><br/>
            <form onSubmit={submitHandler}>
                <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/><br/><br/>
                <button>Show</button>
            </form><br/><br/>

            <h1 className='text-info'> {temp}</h1>
            <h1 className='text-info'>{humi}</h1>
            
         
           
        </div>
           
    </div>
  )
}

export default Report