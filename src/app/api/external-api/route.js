import axios from "axios";
import { request } from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const {searchParams} = new URL(request.url);
    const city = searchParams.get("city")
    const responseData = await fetchWeatherApiData(city);

    if (!responseData){
      return NextResponse.json(
        { error: "Weather data not found." },
        { status: 404 }
      );
    }
    
    return NextResponse.json(responseData, {status: 200});

  } catch (error) {
    console.error("Error in fetachWeather Api - ", error);
    return NextResponse.json(
      { error: "Error in fetachWeather Api.", error},
      { status: 404 }
    );
  }
};

const fetchWeatherApiData = async (city) => {
  try {

    const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY;
    const apiURL = process.env.NEXT_PUBLIC_WEATHER_API_URL;

    const params = {
      q:city,
      units: "metric",
      appid: apiKey,
    };

    if (!apiKey || !apiURL) {
      console.error("API key or URL is not defined in the environment variables.");
      return null;
    }

    const response = await axios.get(apiURL, { params });
    if (response?.data) {
      return response?.data;
    } else {
      return null;
    }

  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}