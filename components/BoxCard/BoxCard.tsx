import { Character } from '../../types'
import styles from './BoxCard.module.css'

function BoxCard({ id, name, thumbnail }: Character) {
  return (
    <div className={styles.container}>
      <div className={styles.container_image}>
        <img
          width="100%"
          loading='lazy'
          decoding="async"
          alt={`${id}-${name}`}
          className={styles.image}
          src={`${thumbnail.path}.${thumbnail.extension}`} 
          />
      </div>
      <div className={styles.container_info}>
        <h3 className={styles.title}>Hello, {name}!</h3>
      </div>
    </div>
  ) 
}

export default BoxCard;