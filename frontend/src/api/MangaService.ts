import { api } from "@/api"
import { type Manga } from "@/types"

class MangaService {
  constructor() {}
  
  async  all(page = 1, pageSize = 24): Promise<Manga[]> {
    try {
      const { data } = await api.get('/mangas', {
        params: {
          populate: 'cover',
        }
      })
      return data.data
    } catch (e) {
      return Error("Não foi possível carregar")
    }
  }
}

export const mangaService = new MangaService()