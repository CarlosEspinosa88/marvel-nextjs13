import { screen, render } from '@testing-library/react'
import user from "@testing-library/user-event";
import BoxCard from './BoxCard'

let character = {
  id: 56,
  name: 'Spider-Man',
  thumbnail: {
    path: 'spiderman',
    extension: 'jpg',
  }
}

test('show an image and text of hero', () => {
  render(
    <BoxCard 
      id={character.id}
      name={character.name}
      thumbnail={character.thumbnail}
    />
  )

  const image = screen.getByAltText(`${character.id}-${character.name}`)
  const text = screen.getByText(/spider/i)

  expect(image).toBeInTheDocument()
  expect(text.textContent).toEqual(character.name)
})