import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const responseData = await fetchWeatherApiData();

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

const fetchWeatherApiData = async () => {
  try {

    const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY;
    const apiURL = process.env.NEXT_PUBLIC_WEATHER_API_URL;

    const params = {
      lat: 28.7041,
      lon: 77.1025,
      units: "metric",
      appid: apiKey,
    };

    if (!apiKey || !apiURL) {
      console.error("API key or URL is not defined in the environment variables.");
      return null;
    }

    const response = await axios.get(apiURL, { params });
    if (response.data) {
      return response.data;
    } else {
      return null;
    }

  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}