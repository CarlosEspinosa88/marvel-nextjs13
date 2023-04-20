import Link from "next/link"
import { getCharacters } from '../utils/getCharacters'

export default async function Page() {
  const { data, statusResponse, statusCode } = await getCharacters()

  return (
    <div>
      <h1>Hello, Home!</h1>
      {statusResponse === 'Ok' && statusCode === 200 ? (
        <div>
          {data.map((character) => (
            <div key={character.id}>
              <Link href={`/character/${character.id}`}>
                <h3>{character.id} / {character.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <h1>Unexpected error!</h1>
      )}
    </div>
  )
}