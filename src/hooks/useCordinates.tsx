import { useState, useEffect } from "react";
import debounce from "../utils/debounce";
import { getCoordinates } from "../api/get/coordinates";
import {
  CordinatesData,
  UseCordinatesResult,
  LocationItem,
} from "../interfaces/codinatesResult";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useCordinate = (location: string): UseCordinatesResult => {
  const [data, setData] = useState<CordinatesData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const dataDestinations = useSelector(
    (state: RootState) => state.destinations
  );

  const debouncedFetchData = debounce(async (location: string) => {
    try {
      const result = await getCoordinates(location);

      const onlyCity = result.filter(
        (item: any) => item.result_type === "city"
      );

      const filteredCities = onlyCity.filter(
        (city: CordinatesData) =>
          !dataDestinations.some(
            (destination: LocationItem) => destination.id === city.id
          )
      );

      setData(filteredCities);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, 500);

  useEffect(() => {
    if (location) {
      setLoading(true);
      debouncedFetchData(location);
    }
  }, [location]);

  const reset = () => {
    setData(null);
    setLoading(true);
    setError(null);
  };

  return { data, loading, error, reset };
};

export default useCordinate;
