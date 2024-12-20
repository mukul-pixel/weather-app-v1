import React from 'react'
import Card from './Card';

const WeatherInfo = () => {
  let temp = 18;
  const data = [
    {title:"6%",description:"Humidity is making it feel warmer"},
    {title:"2.3''",description:"2'' expected in next 24h"},
    {title:"6 min",description:""},
    {title:"25", description:"The dew point is 25* right now"}
  ]
  return (
   <>
   <div className=' h-[100%]'>
    <div className='temperatureDisplayWrap flex justify-center h-[25%] p-3'>
      <span className='displayTemperature text-slate-600 items-center flex text-7xl'>
        {temp}^C
      </span>
    </div>
    <div className='moreWeatherInfoCards grid grid-cols-2 gap-8 p-4'>
      {
        data.map((item,idx)=>(
          <Card key={idx} title={item.title} description={item.description}/>
        ))
      }
    </div>
   </div>
   </>
  )
}

export default WeatherInfo