"use client";
import React, { useState } from 'react'

const Searchbox = ({ searchfunc }) => {
    const [city, setCity] = useState("Barmer");

    const handleSubmit = () => {
        city && searchfunc('Barmer');
    }

    return (
        <div className='inputBoxWrapper '>
            <input type='text' placeholder='City Name' onChange={(e) => setCity(e.target.value)} className='searchBar w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none' />
            <button type='submit' onClick={handleSubmit} className='searchButton'>Search</button>
        </div>
    )
}

export default Searchbox