'use client'

import { useState, ChangeEvent } from 'react'
import { Character } from '../../types'
import useGetCharacterInput from '../../hooks/useGetCharacterInput'
import Input from '@components/Input'

type SearchBoxTypes = {
  results: Character[]
}

function SearchBox() {
  const [ data, setData ] = useState<string>('')

  function handleInputValue(event: ChangeEvent<HTMLInputElement>) {
    setData(event.target.value) 
  }

  return (
    <div>
      <Input 
        id="123"
        value={data}
        label='Search'
        maxLength={10}
        placeholder="Write here you heroe"
        onChange={handleInputValue}
      /> 
    </div>
  )
}

export default SearchBox