import React from 'react'
import { thermometerSvgIcon } from '../../../public/svg/Icons'

const UvIndexCard = () => {
  return (
    <div className='bg-black h-[170px] w-[400px] my-4 px-4 border rounded-lg'>

      <div className='flex justify-start items-center py-1 gap-2'>
        <div>
          {thermometerSvgIcon()}
        </div>
        <div>
          <p className='font-medium text-white'>UV Index</p>
        </div>
      </div>

      <div>
        <p className='font-bold text-[32px] text-white'>3</p>
      </div>
      <div>
        <p className='font-medium text-white'>Moderate</p>
      </div>
      <div>
        Slider
      </div>
      <div>
        <p className='font-normal text-white'>Use Sun protection until 16:00</p>
      </div>
    </div>
  )
}

export default UvIndexCard