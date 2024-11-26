import React from 'react'

const ForecastCards = ({ hourly }) => {
  return (
    <>
      <div className='grid grid-cols-6 w-[900px] h-[150px] my-4 gap-4'>
        {
          hourly.map((hourInfo, index) => (
            <div key={index} className='bg-gray-600 rounded-lg m-1'>
              <div className='py-1'>
                <p className='text-center font-medium text-white text-[16px]'>{hourInfo.time}</p>
              </div>

              {
                hourInfo &&
                  hourInfo.date ?
                  (
                    <div className='py-1 text-center'>
                      <p className='font-light text-[16px] text-gray-900'>
                        {hourInfo.date}
                      </p>
                    </div>
                  )
                  :
                  ('')
              }

              <div className='text-center py-1'>
                <p className='font-bold text-[32px] text-white'>{hourInfo.temperature}</p>
              </div>

              <div className='py-1 flex justify-center'>
                {hourInfo.svg}
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ForecastCards