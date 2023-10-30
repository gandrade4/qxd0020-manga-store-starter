export type Manga = {
  id: number,
  title: string,
  price: number,
  summary ?: string,
  number: number
  cover: Cover
}

type Cover = {
  url: string,
  altenativeText: string
}