import React from 'react'

const Card = ({title,description}) => {
  return (
    <div className='border rounded-lg px-5 h-[200px] bg-transparent'>
        <div>Humidity</div>
        <h3 className='font-bold text-4xl my-5 p-5 m-3 text-slate-600'>{title}</h3>
        <p className='text-transparent mt-10 font-bold sm:text-sm md:text-md lg:text-xl bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600'>{description}</p>
    </div>
  )
}

export default Card