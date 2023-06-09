import { screen, render } from '@testing-library/react'
import user from "@testing-library/user-event";
import BoxCardLink from './BoxCardLink'
import SearchBox from '../SearchBox'
import '../../__mocks__/intersectionObserverMock';

let dataMock = [
  {
    id: 12,
    name: 'Spiderman',
    thumbnail: {
      path: 'spiderman',
      extension: 'jpg',
    }
  }
]

test('render <BoxCardLink />', () => {
  render(<BoxCardLink results={dataMock} />)

  const input = screen.getByRole('textbox')
  expect(input).toBeInTheDocument()
})

test('render the new hero', async () => {
  const heroName = 'spiderman'
  render(<BoxCardLink results={dataMock} />)

  const input = screen.getByRole('textbox', { name: /search/i })
  await user.click(input)
  await user.keyboard(heroName)


  const list = await screen.findAllByRole('list')
  expect(list).toHaveLength(1)
})