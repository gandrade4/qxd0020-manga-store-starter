import { baseURL } from '@/api'

export function getUploadURL(url: string) {
  return `${baseURL}${url}`
}