<template>
  <div class="py-6 px-8 flex items-center lg:block justify-between bg-[#202020] lg:min-w-36 w-full rounded-2xl">
    <div class="flex items-center justify-between">
      <p>
        {{
          new Date(day.date).toLocaleDateString(
          browserLocales[0],
          {
            weekday: "short",
          }
          )
        }}
      </p>
      <img :src="`${day.hour[0].condition.icon}`" alt="" class="w-10 hidden lg:block">
    </div>
    
    <img :src="`${day.hour[0].condition.icon}`" alt="" class="w-10 lg:hidden">
    
    <div class="flex gap-4 lg:gap-0 lg:justify-between">
      <div class="flex items-center gap-1">
        <i class="fa-solid fa-arrow-down fa-2xs" style="color: #ffffff;"></i>
        <p>{{ Math.round(day.day.mintemp_c) }}&deg;</p>
      </div>
      <div class="flex items-center gap-1">
        <i class="fa-solid fa-arrow-up fa-2xs" style="color: #ffffff;"></i>
        <p>{{ Math.round(day.day.maxtemp_c) }}&deg;</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  day: Object,
  currentWeather: Object,
  browserLocales: Array,
})
</script>