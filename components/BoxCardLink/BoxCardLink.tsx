'use client'

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Character, Results } from '../../types'
import styles from './BoxCardLink.module.css'

function BoxCardLink({ results }: Results) {
  const node = useRef<HTMLDivElement>(null)
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCharacters(results)
        }
      })
    })

    if (node.current) {
      observer.observe(node.current)
    }

    return () => observer.disconnect()

  }, [results])

  return (
    <div ref={node} className={styles.grid_container}>
      {characters.map((character) => (
        <div key={character.id} className={styles.image_container}>
          <Link href={`/character/${character.id}`}>
            <div className={styles.image_wrapper}>
              <img
                width="100%"
                loading='lazy'
                decoding="async"
                alt={character.name}
                className={styles.image}
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
      ))}
    </div>
  )
  
}

export default BoxCardLink