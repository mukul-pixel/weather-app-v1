"use client"
import Searchbox from "@/components/item1/searchbox";
import WeatherInfo from "@/components/item1/WeatherInfo";
import ForecastCards from "@/components/item2/ForecastCards";
import { hourly, days } from '@/data/forecast'
import UvIndexCard from "@/components/item2/UvIndexCard";
import WindCard from "@/components/item2/WindCard";
import { notFound } from "next/navigation";
import { useState } from "react";


export default function Home() {
  const [city,setCity] = useState("barmer")
  const [weatherData,setWeatherData] = useState("");

  const fetchWeatherData = async()=>{
      const baseApi = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseApi}api/external-api?city=${city}`, {cache: "no-store"});

      if (!response.ok) {
        console.error('Failed to fetch weather data:', response.statusText);
        notFound();
      }

      const data = await response.json();  
      setWeatherData(data); 
  }
  
  return (
    <div >
      <div className="w-full h-[800px]">
        <div className="item1ComponentWrap w-[100%] h-[700px] p-2">
          {/* using callback to pass data from child component to parent component */}
          <Searchbox onSearch = {(city)=>{
            setCity(city);
            fetchWeatherData(city);
          }}/>
          <WeatherInfo data = {weatherData.main} date = {weatherData.dt} />
        </div>
        <div className=" h-[800px]">
          <ForecastCards hourly={hourly}  data={weatherData}/>
          <ForecastCards hourly={days} />
          <div className="flex justify-start gap-2">
            <UvIndexCard />
            <WindCard />
          </div>
        </div>
      </div>
    </div>
  );
}
