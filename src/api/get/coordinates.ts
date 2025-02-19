import axios from "axios";

export const getCoordinates = async (city: string) => {
  try {
    const response = await axios.get(
      `https://search.reservamos.mx/api/v2/places`,
      {
        params: {
          q: city,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
