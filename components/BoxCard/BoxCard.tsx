import { Character } from '../../types'

function BoxCard({ id, name, thumbnail }: Character) {
  return (
    <>
      <h1>Hello, {name}!</h1>
      <img
        width="100%"
        loading='lazy'
        decoding="async"
        alt={`${id}-${name}`}
        src={`${thumbnail.path}.${thumbnail.extension}`} 
      />
    </>
  ) 
}

export default BoxCard;