import { useEffect, useState } from 'react';

export const usePrayerTimes = (city, country, readyToSearch) => {
  const [prayerTimes, setPrayerTimes] = useState(null);

  useEffect(() => {
    if (readyToSearch) {
      fetch(
        `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}`
      )
        .then((res) => res.json())
        .then((res) => {
          const { timings } = res.data;
          setPrayerTimes(timings);
        });
    }
  }, [city, country, readyToSearch]);

  return prayerTimes;
};
