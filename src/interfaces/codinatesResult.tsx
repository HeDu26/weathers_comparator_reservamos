export interface CordinatesData {
  temperature: number;
  condition: string;
  city_name: string;
  state: string;
  lat: string;
  long: string;
  id: string;
  name: string;
  country: string;
  // Add other fields as needed
}

export interface UseCordinatesResult {
  data: CordinatesData[] | null;
  loading: boolean;
  error: Error | null;
  reset: () => void;
}

export interface LocationItem {
  id: string;
  name: string;
  state: string;
  country: string;
  lat: string;
  long: string;
  color: string;
}
