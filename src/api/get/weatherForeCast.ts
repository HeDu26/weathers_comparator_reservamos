import axios from "axios";

const weatherForeCast = async (lan: string, lon: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast`,
      {
        params: {
          lat: lan,
          lon: lon,
          units: "metric",
          appid: "cc17a63faf54a428eec86b98136b5247",
        },
      }
    );
    console.log("REEEES:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default weatherForeCast;
