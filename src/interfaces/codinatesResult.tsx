export interface CordinatesData {
  temperature: number;
  condition: string;
  city_name: string;
  state: string;
  lat: string;
  long: string;
  // Add other fields as needed
}

export interface UseCordinatesResult {
  data: CordinatesData[] | null;
  loading: boolean;
  error: Error | null;
}
