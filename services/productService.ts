
import { ENV } from '@/configs/env';
import * as axiosApiClient from '@/utils/api-client'


export const getListFilm = async ({ query }: { query?: string } = {}) => {
  try {
    const endpoint = query
      ? `${ENV.API_URL}/search/movie`
      : `${ENV.API_URL}/discover/movie?sort_by=popularity.desc`
    
    const res = await axiosApiClient.get(
      endpoint,
      query ? { params: { query } } : {}
    )   
    return res.results
  } catch (error) {
    console.error('getListFilm error:', error)
    return []
  }
}

export const getMovieDetail = async (movieId: string) => {
  try {
    const res = await axiosApiClient.get(`${ENV.API_URL}/movie/${movieId}`)
    return res
  } catch (error) {
    return error 
  }
}
