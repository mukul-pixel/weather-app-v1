import Searchbox from "@/components/item1/searchbox";
import WeatherInfo from "@/components/item1/WeatherInfo";
import ForecastCards from "@/components/item2/ForecastCards";
import { hourly, days } from '@/data/forecast'
import UvIndexCard from "@/components/item2/UvIndexCard";
import WindCard from "@/components/item2/WindCard";


export default async function Home() {
  const response = await fetch(`process.env.${NEXT_PUBLIC_BASE_URL}api/external-api`, {cache: "no-store"});
  console.log('datasdjhsdksj', response);

  return (
    <div >
      <div className="w-full h-[800px]">
        <div className="item1ComponentWrap w-[100%] h-[700px] p-2">
          <Searchbox />
          <WeatherInfo />
        </div>
        <div className=" h-[800px]">
          <ForecastCards hourly={hourly} />
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
