import { api } from "@/api"
import { type Manga } from "@/types"

class MangaService {
  constructor() {}
  
  async  all(page = 1, pageSize = 24): Promise<Manga[]> {
    const { data } = await api.get('/mangas', {
      params: {
        populate: 'cover',
      }
    })
    return data.data
  }

  async get(id: number): Promise<Manga> {
    const { data } = await api.get(`/mangas/${id}`, {
      params: {
        populate: ['cover', 'comments'],
      }
    })
    return data.data
  }
}

export const mangaService = new MangaService()