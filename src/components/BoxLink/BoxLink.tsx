import Link from "next/link"
import styles from '../BoxCardLink/BoxCardLink.module.css'
import BoxCard from "@components/BoxCard"
import { Characters } from '@customTypes/customTypes'

function BoxLink({ characters }: Characters) {
  return (
    <>
      {characters.map((character) => (
        <li key={character.id} className={styles.image_container}>
          <Link href={`/character/${character.id}`} aria-label={character.id}>
            <BoxCard
              id={character.id}
              name={character.name}
              thumbnail={character.thumbnail}
              />
          </Link>
        </li>
      ))}
    </>
  )
}

export default BoxLink