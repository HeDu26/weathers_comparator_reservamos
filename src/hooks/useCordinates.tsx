import { useState, useEffect } from "react";
import debounce from "../utils/debounce";
import { getCoordinates } from "../api/get/coordinates";
import {
  CordinatesData,
  UseCordinatesResult,
} from "../interfaces/codinatesResult";

const useCordinate = (location: string): UseCordinatesResult => {
  const [data, setData] = useState<CordinatesData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const debouncedFetchData = debounce(async (location: string) => {
    try {
      const result = await getCoordinates(location);

      const onlyCity = result.filter(
        (item: any) => item.result_type === "city"
      );
      setData(onlyCity); // onlyCity es un array de CordinatesData
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

  return { data, loading, error };
};

export default useCordinate;
