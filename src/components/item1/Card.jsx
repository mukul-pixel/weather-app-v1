import React from 'react'

const Card = ({title,description}) => {
  return (
    <div className='border rounded-lg h-[200px]'>
        <div>Humidity</div>
        <h3 className='font-bold text-4xl p-4 m-3'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
    </div>
  )
}

export default Card