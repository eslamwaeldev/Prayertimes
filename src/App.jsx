import { useState } from "react";
import "./App.css";
import CitySearch from "./components/CitySearch";
import CountrySearch from "./components/CountrySearch";
import GlobeButton from "./components/GlobeButton";
import SearchButton from "./components/SearchButton";
import PrayerEntry from "./components/PrayerEntry";
import { countries } from "./data/countries";
import { usePrayerTimes } from "./hooks/usePrayerTimes";

const wantedTimes = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

const countriesList = Object.keys(countries);

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [readyToSearch, setReadyToSearch] = useState(false);
  const prayerTimes = usePrayerTimes(city, country, readyToSearch);

  return (
    <div className="App flex flex-col justify-around items-start h-full w-screen text-3xl px-8 py-4">
      {!readyToSearch ? (
        <div className="flex flex-col items-center justify-center w-full">
          <CountrySearch countriesList={countriesList} country={country} countryReady={setCountry} />
          {country && <CitySearch countries={countries} cityReady={setCity} city={city} country={country} />}
          {country && city && <SearchButton readyToSearch={setReadyToSearch} />}
        </div>
      ) : (
        <>
          <GlobeButton city={setCity} country={setCountry} readyToSearch={setReadyToSearch} />

          {Object.entries(prayerTimes ?? [])
            .filter(([prayerName]) => wantedTimes.includes(prayerName))
            .map(([prayerName, prayerTime]) => (
              <>
                <PrayerEntry prayerName={prayerName} prayerTime={prayerTime} />
              </>
            ))}
        </>
      )}
    </div>
  );
}

export default App;
