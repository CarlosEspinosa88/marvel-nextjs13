export type Character = {
  id: number;
  name: string
}

export type Repository = {
  code: number;
  status: string;
  data: {
    results: Character[]
  }
}

export type CharacterId = {
  params: {
    id: string
  }
}