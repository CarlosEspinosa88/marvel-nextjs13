import { CharacterId, Repository } from '../../../types'
import { getCharacterDetail } from '@utils/getCharacterDetail'
import BoxCard from '@components/BoxCard'
import styles from './character.module.css'


export default async function Page({ params }: CharacterId) { 
  const { data, status, code }: Repository = await getCharacterDetail(params.id)

  return status === 'Ok' && code === 200 ? (
    <>
      {data.results.map((character) => (
        <div key={character.id} className={styles.container}>
          <BoxCard
            id={character.id}
            name={character.name}
            thumbnail={character.thumbnail}
          />
        </div>
      ))}
    </>
  ) : null
}