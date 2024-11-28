import axios from "axios";

const fetchWeatherData = async () => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY;
  const apiURL = process.env.NEXT_PUBLIC_WEATHER_API_URL;

  console.log({ apiURL, apiKey }); // Debugging log

  if (!apiKey || !apiURL) {
    console.error("API key or URL is not defined in the environment variables.");
    return;
  }
  const params = {
    q:"barmer",
    units: "metric",
    appid: apiKey,
  };

  try {
    const response = await axios.get(apiURL,{params});
    console.log(response?.data);
  } catch (error) {
    console.error("Error fetching weather data:", error?.message);
  }
};

fetchWeatherData();

export default fetchWeatherData;
