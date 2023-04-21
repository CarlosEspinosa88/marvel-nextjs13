import Link from "next/link"
import { Repository } from '../types'
import { getCharacters } from '../utils/getCharacters'

export default async function Page() {
  const { data, status, code }: Repository = await getCharacters()

  return (
    <div>
      <h1>Hello, Home!</h1>
      {status === 'Ok' && code === 200 ? (
        data.results.map((character) => (
          <div key={character.id}>
            <Link href={`/character/${character.id}`}>
              <h3>{character.id} / {character.name}</h3>
            </Link>
          </div>
        ))
      ) : (
        <h1>Unexpected error!</h1>
      )}
    </div>
  )
}