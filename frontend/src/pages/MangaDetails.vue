<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { type Manga } from '@/types'
import { getUploadURL } from '@/composables/useUploadFile'
import { mangaService } from '@/api/MangaService'
import CommentsContainer from '@/components/Comment/Container.vue'

const loading = ref(true)
const manga = ref<Manga>({} as Manga) 
const error = ref('')

const route = useRoute()

onMounted(async () => {
  try {
    manga.value = await mangaService.get(Number(route.params.id))
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})

</script>

<template>
<p v-if="error">
  {{ error }}
</p>
<div v-if="!loading" class="row justify-content-center">
  <div class="col-lg-8 col-sm-12">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="getUploadURL(manga.cover.url)" class="w-100 rounded-start" :alt="manga.cover.alternativeText">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ manga.title }}</h5>
            <hr>
            <div class="text-start">
              <p class="card-text">Volume: {{ manga.number }}</p>
              <p class="card-text"><strong>Preço: <small class="text-danger">{{ manga.price }}</small></strong></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="row">
    <CommentsContainer class="col-12" :comments="manga.comments"></CommentsContainer>
  </div>
</div>  
</template>