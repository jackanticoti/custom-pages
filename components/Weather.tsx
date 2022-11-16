import React, { useEffect, useState } from 'react';

type WeatherCondition = {
  main: string;
};

type Weather = {
  name: string;
  weather: WeatherCondition[];
};

function useWeather(zipCode?: string) {
  const [data, setData] = useState<Weather | null>(null);

  useEffect(() => {
    if (!zipCode) return;

    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=d7bf2dae9bb262d59ba4dbf867917e4a`
      );
      const data = await response.json();
      console.log('data', data);
      setData(data);
    };

    fetchData();
  }, [zipCode]);

  return data;
}

export default function Weather({ zipCode }: { zipCode: string }) {
  const weather = useWeather(zipCode);

  if (!weather) {
    return null;
  }

  return (
    <span>
      &nbsp;It looks like {weather?.weather[0]?.main} today in {weather.name}.
    </span>
  );
}
