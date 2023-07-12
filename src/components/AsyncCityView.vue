<template>
  <div class="text-white">
    <div v-if="route.query.preview">

      <div class="pb-2 border-b-2 border-custom-green mt-8">
        <h2 class="text-3xl">{{ route.query.location }}</h2>
      </div>

      <!-- Current Weather Details -->
      <div class="mt-8 flex flex-col items-center gap-3 mb-10">
        <p class="">
          {{
            new Date(currentWeather.location.localtime).toLocaleDateString(
            browserLocales[0],
            {
              weekday: "long",
              day: "2-digit",
              month: "short",
            }
            )
          }}
          {{
            new Date(currentWeather.location.localtime).toLocaleTimeString(
            browserLocales[0],
            {
              timeStyle: "short",
            }
            )
          }}
        </p>
        <p class="text-6xl">{{ currentWeather.current.temp_c }}&deg;C</p>
        <img :src="`${currentWeather.current.condition.icon}`" alt="">
        <p>{{ currentWeather.current.condition.text }}</p>
        
      </div>

      <!-- Forecast Weather on 7 Days -->
      <div class="mb-8">
        <p class="text-sm text-custom-green mb-4">
          <i class="fa-solid fa-calendar-days"></i>
          Prévision sur 7 jours
        </p>
        <div class="flex justify-between flex-col lg:flex-row w-full gap-4">
          <ForecastDetailCard v-for="day in forecastWeather" :day="day" :current-weather="currentWeather" :browser-locales="browserLocales"/>
        </div>
      </div>
      
      
      <!-- Current Weather Details -->
      <div class="mb-10">
        <p class="text-sm text-custom-green mb-4">
          <i class="fa-solid fa-circle-info"></i>
          Informations complémentaires
        </p>
        <div class="flex gap-4 flex-wrap justify-center sm:justify-normal">
          <WeatherDetailCard card-title="Ressenti" :data="`${currentWeather.current.feelslike_c}&deg;C`"/>
          <WeatherDetailCard card-title="Humidité" :data="`${currentWeather.current.humidity}%`"/>
          <WeatherDetailCard card-title="Précipitation" :data="`${currentWeather.current.precip_mm}mm`"/>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import WeatherDetailCard  from './WeatherDetailCard.vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import ForecastDetailCard from './ForecastDetailCard.vue';

function getBrowserLocales(options = {}) {
  const defaultOptions = {
    languageCodeOnly: true,
  };
  const opt = {
    ...defaultOptions,
    ...options,
  };
  const browserLocales =
  navigator.languages === undefined
  ? [navigator.language]
  : navigator.languages;
  if (!browserLocales) {
    return undefined;
  }
  return browserLocales.map(locale => {
    const trimmedLocale = locale.trim();
    return opt.languageCodeOnly
    ? trimmedLocale.split(/-|_/)[0]
    : trimmedLocale;
  });
}

const browserLocales = getBrowserLocales();

const route = useRoute();

const getCurrentWeather = async () => {
  try {
    const weatherData = await axios.get(`http://api.weatherapi.com/v1/current.json?key=47a51ac91d6f491c953222711230507&q=${route.query.location}&aqi=no&lang=${browserLocales[0]}`);
    return weatherData.data;
  } catch (error) {
    console.log(error);
  }
}

const getForecastWeather = async () => {
  try {
    const forecastData = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=47a51ac91d6f491c953222711230507&q=${route.query.location}&days=7&aqi=no&alerts=no&hour=12`);
    return forecastData.data.forecast.forecastday;
  } catch (error) {
    console.log(error);
  }
}
const forecastWeather = await getForecastWeather();

const currentWeather = await getCurrentWeather();
</script>