import Searchbox from "@/components/item1/searchbox";
import WeatherInfo from "@/components/item1/WeatherInfo";
import ForecastCards from "@/components/item2/ForecastCards";
import Image from "next/image";
import { hourly, days } from '@/data/forecast'


export default function Home() {
  return (
    <div >
      <div className="w-full h-[800px] m-4">
        <div className="w-[97%] h-[700px] bg-slate-600">
          <Searchbox />
          <WeatherInfo />
        </div>
        <div className="bg-black h-[800px]">
          <ForecastCards hourly={hourly} />
          <ForecastCards hourly={days} />
        </div>

      </div>
    </div>
  );
}
