<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type Manga } from '@/types'
import MangaCard from '@/components/MangaCard.vue'
import { mangaService } from '@/api/MangaService'

const loading = ref(true)
const mangas = ref<Manga[]>([]) 
const error = ref('')


onMounted(async () => {
  try {
    mangas.value = await mangaService.all()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
<div v-if="error" class="alert alert-danger alert-dismissible fade show" role="alert">
  {{ error }}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  <div class="col" v-for="manga in mangas" :key="manga.id">
    <MangaCard 
    :id="manga.id"
    :titulo="manga.title"
    :preco="manga.price"
    :volume="manga.number"
    :sumario="manga.summary"
    :capa="manga.cover"
    ></MangaCard>
  </div>
</div>
</template>