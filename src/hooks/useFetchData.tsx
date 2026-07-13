import { useEffect, useState } from 'react';
import { type OpenMeteoResponse } from '../types/DashboardTypes';

export default function useFetchData(): OpenMeteoResponse | undefined {
  const URL =
    'https://api.open-meteo.com/v1/forecast?latitude=29.76&longitude=-95.36&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m&temperature_unit=celsius&wind_speed_unit=kmh&precipitation_unit=mm';
  const [data, setData] = useState<OpenMeteoResponse>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const json = (await response.json()) as OpenMeteoResponse;
      setData(json);
    };

    void fetchData();
  }, []);

  return data;
}
