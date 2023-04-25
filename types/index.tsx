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