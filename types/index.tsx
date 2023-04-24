export type Character = {
  id: number;
  name: string;
  thumbnail: Thumbnail
}

export type Thumbnail = {
  path: string;
  extension: string;
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