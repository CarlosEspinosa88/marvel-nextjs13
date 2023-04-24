import Link from "next/link"
import { Repository } from '../types'
import { getCharacters } from '@utils/getCharacters'
import styles from './page.module.css'

export default async function Page() {
  const { data, status, code }: Repository = await getCharacters()

  return (
    <div className={styles.main_container}>
      <h1 className={styles.title}>
        Marvel Hero Finder
      </h1> 
      <div className={styles.grid_container}>
          {status === 'Ok' && code === 200 ? (
            data.results.map((character) => (
              <div key={character.id} className={styles.image_container}>
                <Link href={`/character/${character.id}`}>
                  <div className={styles.image_wrapper}>
                    <img
                      className={styles.image}
                      width="100%"
                      loading='lazy'
                      decoding="async"
                      alt={character.name}
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      />
                  </div>
                  <div className={styles.info_container}>
                    <h4 className={styles.title}>
                      {character.name}
                    </h4>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <h1>Unexpected error!</h1>
          )}
      </div>
    </div>
  )
}