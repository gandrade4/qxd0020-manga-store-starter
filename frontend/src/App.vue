<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type Manga } from '@/types'
import MangaCard from '@/components/MangaCard.vue'
import { mangaService } from '@/api/MangaService'

const loading = ref(true)
const mangas = ref<Manga[]>([]) 


onMounted(async () => {
  mangas.value = await mangaService.all()
})


</script>

<template>
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  <div class="col" v-for="manga in mangas" :key="manga.id">
    <MangaCard 
    :id="manga.id"
    :titulo="manga.title"
    :preco="manga.price"
    :volume="manga.number"
    :sumario="manga.summary"
    ></MangaCard>
  </div>
</div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
