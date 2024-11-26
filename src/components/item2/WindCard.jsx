import React from 'react'
import { windSvgIcon } from '../../../public/svg/Icons'

const WindCard = () => {
    return (
        <div className='bg-black w-[400px] h-[170px] my-4 px-4 flex justify-center gap-2 border rounded-lg'>

            <div className='w-[50%]'>

                <div className='flex justify-start items-center my-1 gap-2'>
                    <div>
                        {windSvgIcon()}
                    </div>
                    <div>
                        <p className='text-gray-500 font-semibold'>WIND</p>
                    </div>
                </div>

                <div className='flex justify-start gap-2 py-2'>
                    <div>
                        <p className='text-[32px] text-white font-bold'>3</p>
                    </div>

                    <div>
                        <div>
                            <p className='text-[16px] text-white font-normal'>MPH</p>
                        </div>
                        <div>
                            <p className='text-[16px] text-white font-normal'>Wind</p>
                        </div>
                    </div>
                </div>

                <div>
                    <hr class="border-t-4 border-gray-400 border-gray"></hr>
                </div>

                <div className='flex justify-start gap-2 py-2'>
                    <div>
                        <p className='text-[32px] text-white font-bold'>9</p>
                    </div>

                    <div>
                        <div>
                            <p className='text-[16px] text-white font-normal'>MPH</p>
                        </div>
                        <div>
                            <p className='text-[16px] text-white font-normal'>Gusts</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-[50%] flex items-center'>
                <p className='text-white'>Compass Svg</p>
            </div>
        </div>
    )
}

export default WindCard