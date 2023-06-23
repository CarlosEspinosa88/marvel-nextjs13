import { screen, render } from '@testing-library/react'
import BoxLink from './BoxLink'

const characters = [
  {
    id: 94746,
    name: 'Spider-man',
    thumbnail: {
      path: 'http://marvel.com/images/spider-man',
      extension: 'jpg',
    }
  }, 
  {
    id: 568293,
    name: 'Hulk',
    thumbnail: {
      path: 'http://marvel.com/images/hulk',
      extension: 'jpg',
    }
  },
]

test('show a list of character and check the links', () => {
  render(<BoxLink characters={characters} />)

  const listItems = screen.getAllByRole('listitem')
  const linkItem = screen.getAllByRole('link')
  
  expect(listItems).toHaveLength(2)
  expect(linkItem).toHaveLength(2)

  for(const character of characters) {
    const linkByItem = screen.getByRole('link', { name: character.id })
    expect(linkByItem).toHaveAttribute('href', `/character/${character.id}`)
  }
})