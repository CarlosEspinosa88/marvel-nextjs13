import { Repository } from '../types'
import { TS, LIMIT, OFFSET, QUERY,  URL, HASH, API_KEY } from '../config/constants'


export async function getCharacters() {
  const ALL_URL: string = `${URL}${QUERY}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&limit=${LIMIT}&offset=${OFFSET}`;
  const fetching = await fetch(ALL_URL)
  const response: Repository = await fetching.json()
  
  return {
    statusCode: response.code,
    statusResponse: response.status,
    data: response.data.results
  }
}