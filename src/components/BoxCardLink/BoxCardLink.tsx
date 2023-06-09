'use client'

import Link from "next/link"
import { useEffect, useState, useRef, ChangeEvent, useMemo } from "react"
import { Character, Results } from '@customTypes/customTypes'
import SearchBox from "@components/SearchBox"
import styles from './BoxCardLink.module.css'

function BoxCardLink({ results }: Results) {
  const node = useRef<HTMLDivElement>(null)
  const [characters, setCharacters] = useState<Character[]>([])
  const [inputValue, setInputValue] = useState<string>('')

  function handleInputValue(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value) 
  }

  const filteredChar = useMemo(() => {
    return characters.filter((heroe) =>
      heroe.name.toLowerCase() === inputValue.toLowerCase()
    )

  }, [characters, inputValue, results])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (filteredChar.length > 0 ) {
            setCharacters(filteredChar)
          } else {
            setCharacters(results)
          }
        }
      })
    })

    if (node.current) {
      observer.observe(node.current)
    }

    return () => observer.disconnect()

  }, [results, filteredChar])

  return (
    <div>
      <SearchBox handleInputValue={handleInputValue} inputValue={inputValue} />
      <ul ref={node} className={styles.grid_container}>
        {characters.map((character) => (
          <li key={character.id} className={styles.image_container}>
            <Link href={`/character/${character.id}`}>
              <figure className={styles.image_wrapper}>
                <img
                  width="100%"
                  loading='lazy'
                  decoding="async"
                  alt={character.name}
                  className={styles.image}
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  />
                <figcaption className={styles.info_container}>
                    {character.name}
                </figcaption>
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) 
}

export default BoxCardLink
