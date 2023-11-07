export type Manga = {
  id: number,
  title: string,
  price: number,
  summary ?: string,
  number: number
  cover: Cover
  comments: Comment[]
}

export type Cover = {
  url: string,
  altenativeText: string
}

export type Comment = {
  description: string,
  rating: number,
}