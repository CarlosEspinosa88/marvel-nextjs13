import { ChangeEvent } from 'react'

export type Characters = {
  characters: Character[]
}

export type Character = {
  id: number;
  name: string;
  thumbnail: Thumbnail
}

export type Results = {
  results: Character[]
}


export type Thumbnail = {
  path: string;
  extension: string;
}

export type Repository = {
  code: number;
  status: string;
  data: Results
}

export type CharacterId = {
  params: {
    id: string
  }
}

export type InputTypes = {
  id: string,
  label: string,
  value: string,
  placeholder: string,
  maxLength: number,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export type InputValues = {
  inputValue: string
  handleInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
}
