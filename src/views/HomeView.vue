<template>
  <main class="text-white px-4">
    <div class="mb-8 relative mx-auto max-w-3xl">
      <input 
        type="text"
        v-model="searchQuery"
        @input="getSearchResults"
        name="search" 
        id="search" 
        placeholder="Search your city"
        class="bg-transparent rounded-full py-2 px-4 outline-none border-2 border-custom-green w-full"
      >
      <ul
        v-if="searchResults" 
        class="py-2 px-4 border-2 border-custom-green rounded-xl mt-4"
      >
        <li
          v-if="searchResults.length === 0"
          class="text-center"
        >
          No results found
        </li>
        <template v-else>
          <li 
          v-for="result in searchResults"
          :key="result.id"
          @click="previewCity(result)"
          class="cursor-pointer hover:bg-custom-green hover:bg-opacity-10 py-2 px-4 rounded-xl"
          >
          {{ result.name }}, {{ result.region }}, {{ result.country }}
        </li>
      </template>
      </ul>
    </div>
  </main>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const APIKey = '47a51ac91d6f491c953222711230507';

const previewCity = (result) => {
  console.log(result);
  const city = result.name;
  const state = result.region;
  router.push({ 
    name: 'cityView', 
    params: { city, state },
    query: {location: result.name, preview: true }
  });
}

const searchQuery = ref('');
const queryTimeout = ref(null);
const searchResults = ref(null);

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if(searchQuery.value !== ''){
      const result = await axios.get(
      `https://api.weatherapi.com/v1/search.json?key=${APIKey}&q=${searchQuery.value}`
      );
      searchResults.value = result.data;
      return;
    }
    searchResults.value = null;
  }, 300);
}

</script>
