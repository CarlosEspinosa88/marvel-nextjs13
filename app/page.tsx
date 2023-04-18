import Link from "next/link"
import { TS, LIMIT, OFFSET, QUERY,  URL, HASH, API_KEY } from '../config/constants'

const ALL_URL: string = `${URL}${QUERY}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&limit=${LIMIT}&offset=${OFFSET}`;


type Character = {
  id: number;
  name: string
}

type Repository = {
  status: string
  code: number
  data: {
    results: Character[]
  }
}

export default async function Page() {
  const fetching = await fetch(ALL_URL)
  const response: Repository = await fetching.json()

  return (
    <div>
      <h1>Hello, Home!</h1>
      {response.status && response.code ? (
        <>
          {response.data.results.map((character) => (
            <h3 key={character.id}>
              {character.id} / {character.name}
            </h3>
          ))}
        </>
      ) : null}
      <Link href="/about">
        <h3>Go to About!</h3>
      </Link>
      <Link href="/blog">
        <h3>Go to Blog!</h3>
      </Link>
    </div>
  )
}