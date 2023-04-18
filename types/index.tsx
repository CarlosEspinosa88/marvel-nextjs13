type Character = {
  id: number;
  name: string
}

export type Repository = {
  status: string
  code: number
  data: {
    results: Character[]
  }
}

export type CharacterId = {
  params: {
    id: string
  }
}