import { CharacterId, Repository } from '../../../types'
import { getCharacterDetail } from '../../../utils/getCharacterDetail'


export default async function Page({ params }: CharacterId) { 
  const { data, statusResponse, statusCode } = await getCharacterDetail(params.id)
  const [ character ] = data

  return (
    <div>
      {statusResponse === 'Ok' && statusCode === 200 ? (
        <>
          <h1>Hello, {character.name}!</h1>
          <h1>{character.id}</h1>
        </>
      ) : null}
    </div>
  )
}