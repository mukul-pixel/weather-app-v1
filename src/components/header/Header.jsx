"use client"
import React, { useEffect } from 'react'
import fetchWeatherData from '@/api/external-api/route'

const Header = () => {
  useEffect(()=>{
    const fetchData = async () => {
      await fetchWeatherData();
    };
    fetchData();
  },[])
  return (
    <div>Header</div>
  )
}

export default Header