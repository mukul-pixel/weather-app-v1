import React from 'react'
import Card from './Card';

const WeatherInfo = ({data,date}) => {
  const data1 = [
    {title: "Humidity", metric:`${data?.humidity}`},
    {title: "Pressure", metric:`${data?.pressure}`},
    {title: "Sea_Level", metric:`${data?.sea_level}`},
    {title: "Feels_Like", metric:`${data?.feels_like}`}
  ]

  const toUnixDate = () =>{
    const dt = new Date(date*1000);
    return dt.toUTCString();
  }

  return (
   <>
   <div className='h-[100%]'>
    <div className='temperatureDisplayWrap text-center p-3'>
      <div className='displayTemperature text-slate-600 p-3 m-3 items-center text-7xl'>
        {Math.floor(data?.temp)}°C
      </div>
      <div className='displayDate m-2'>{toUnixDate()}</div>
    </div>
    <div className='moreWeatherInfoCards grid grid-cols-2 gap-8 p-4'>
      {
        data1.map((item,idx)=>(
          <Card key={idx} title = {item?.title} metric={item?.metric}/>
        ))
      }
    </div>
   </div>
   </>
  )
}

export default WeatherInfo