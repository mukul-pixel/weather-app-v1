"use server"
import Searchbox from "@/components/item1/searchbox";
import WeatherInfo from "@/components/item1/WeatherInfo";
import ForecastCards from "@/components/item2/ForecastCards";
import { hourly, days } from '@/data/forecast'
import UvIndexCard from "@/components/item2/UvIndexCard";
import WindCard from "@/components/item2/WindCard";
import { notFound } from "next/navigation";


export default async function Home() {
  const weatherData = {};

  const fetchWeatherData = async (city) => {
    console.log('harshal here',city);
    const baseApi = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseApi}api/external-api?city=${city}`, { cache: "no-store" });

    if (!response.ok) {
      console.error('Failed to fetch weather data:', response.statusText);
      notFound();
    }
    if (!response) {
      notFound();
    }
    return response.json();
  }

  const response = await fetchWeatherData('Barmer');
  const searchfunc = (city) => {
    // fetchWeatherData(city);
  }

  return (
    <div >
      <div className="w-full h-[800px]">
        <div className="item1ComponentWrap w-[100%] h-[700px] p-2">
          {/* using callback to pass data from child component to parent component */}
          <Searchbox searchfunc={searchfunc()} />
          <WeatherInfo data={response?.main} date={response?.dt} />
        </div>
        <div className=" h-[800px]">
          <ForecastCards hourly={hourly} data={weatherData} />
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
