import Searchbox from "@/components/item1/searchbox";
import WeatherInfo from "@/components/item1/WeatherInfo";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <div className="bg-white w-full h-[800px] m-4">

        <div className="w-[97%] h-[700px] bg-slate-600">
          <Searchbox />
          <WeatherInfo />
        </div>

      </div>
    </div>
  );
}
