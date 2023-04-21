import { NextPage } from 'next'
import { CharacterId, Repository, Character } from '../../../types'
import { getCharacterDetail } from '../../../utils/getCharacterDetail'


export default async function Page({ params }: CharacterId) { 
  const { data, status, code }: Repository = await getCharacterDetail(params.id)

  return status === 'Ok' && code === 200 ? (
    data.results.map((character) => (
      <div key={character.id}>
        <h1>Hello, {character.name}!</h1>
        <h1>{character.id}</h1>
      </div>
    ))
  ) : null
}