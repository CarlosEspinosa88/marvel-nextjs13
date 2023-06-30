import { useState } from 'react'
import { Character } from '@customTypes/customTypes'

export default function useGetCharacterInput(results: Character[]) {
  const [characters, setCharacters] = useState<Character[]>(results)

  return {
    characters,
  }
}
