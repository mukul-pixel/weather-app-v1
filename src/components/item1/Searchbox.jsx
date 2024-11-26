import React from 'react'

const Searchbox = () => {
    return (
        <div className='w-50'>
            <input type='text' placeholder='City Name' className='searchBar w-5 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none'/>
        </div>
    )
}

export default Searchbox