import { Repository } from '../types'
import { TS, LIMIT, OFFSET, QUERY,  URL, HASH, API_KEY } from '../config/constants'


export async function getCharacterDetail(id: string) {
  const ALL_URL: string = `${URL}${QUERY}/${id}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}`;
  const fetching = await fetch(ALL_URL)
  const response: Repository = await fetching.json()
  
  return {
    code: response.code,
    status: response.status,
    data: response.data
  }
}