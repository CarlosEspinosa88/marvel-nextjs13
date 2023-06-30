'use client'

import Link from 'next/link'
import { useEffect, useState, useRef, ChangeEvent, useMemo } from 'react'
import { Character, Results } from '@customTypes/customTypes'
import SearchBox from '@components/SearchBox'
import BoxLink from '@components/BoxLink'
import styles from './BoxCardLink.module.css'

function BoxCardLink({ results }: Results) {
  const node = useRef<HTMLUListElement>(null)
  const [characters, setCharacters] = useState<Character[]>([])
  const [inputValue, setInputValue] = useState<string>('')

  function handleInputValue(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  const filteredChar = useMemo(() => {
    return characters.filter(
      (heroe) => heroe.name.toLowerCase() === inputValue.toLowerCase(),
    )
  }, [characters, inputValue])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (filteredChar.length > 0) {
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
        <BoxLink characters={characters} />
      </ul>
    </div>
  )
}

export default BoxCardLink
