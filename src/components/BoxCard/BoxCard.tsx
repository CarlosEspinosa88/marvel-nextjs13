/* eslint-disable @next/next/no-img-element */
import { Character } from '@customTypes/customTypes'
import styles from './BoxCard.module.css'
import Image from 'next/image'

function BoxCard({ id, name, thumbnail }: Character) {
  return (
    <div className={styles.container}>
      <figure className={styles.container_image}>
        <img
          width='100%'
          loading='lazy'
          decoding='async'
          alt={`${id}-${name}`}
          className={styles.image}
          src={`${thumbnail.path}.${thumbnail.extension}`}
        />
        <figcaption className={styles.container_info}>{name}</figcaption>
      </figure>
    </div>
  )
}

export default BoxCard
