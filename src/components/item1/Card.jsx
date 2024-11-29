import React from 'react'

const Card = ({title,metric}) => {
  const getDescription = () => {
    switch(title){
      case "Humidity":
        return metric>70 ?
        "High humidity is making it feel warmer":
        "Comfortable humidity levels"
      case "Pressure":
        return metric>1010 ?
        "Pressure is above normal":
        "Pressure is within a normal range"
      case "Sea_Level":
        return metric ? 
        `Sea level is currently at ${metric} meters`
        : "Sea level data is unavailable"
      case "Feels_Like":
        return metric > 30
          ? "It's feeling quite warm"
          : "Feels comfortable right now"
    }
  }
  return (
    <div className='border rounded-lg px-5 h-[200px] bg-transparent'>
        <div>{title}</div>
        <h3 className='font-bold text-4xl my-5 p-5 m-3 text-slate-600'>{metric}</h3>
        <p className='text-transparent mt-10 font-bold sm:text-sm md:text-md lg:text-xl bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600'>{getDescription()}</p>
    </div>
  )
}

export default Card