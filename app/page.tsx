import Link from "next/link"
import { Repository } from '../types'
import { getCharacters } from '@utils/getCharacters'

export default async function Page() {
  const { data, status, code }: Repository = await getCharacters()

  return (
    <div>
      <h1>Marvel Hero Finder</h1>
      {status === 'Ok' && code === 200 ? (
        data.results.map((character) => (
          <div key={character.id}>
            <Link href={`/character/${character.id}`}>
              <h3>{character.name}</h3>
              <img
                width="100%"
                loading='lazy'
                decoding="async"
                alt={character.name}
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              />
            </Link>
          </div>
        ))
      ) : (
        <h1>Unexpected error!</h1>
      )}
    </div>
  )
}