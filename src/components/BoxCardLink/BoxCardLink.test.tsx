import { screen, render } from '@testing-library/react'
import BoxCardLink from './BoxCardLink';
import '../../__mocks__/intersectionObserverMock';

const heroName = 'Spider-Man'
const dataMock = [
  {
    id: 12,
    name: heroName,
    thumbnail: {
      path: 'spiderman',
      extension: 'jpg',
    }
  }
]

test('show a input element in <BoxCardLink />', () => {
  render(<BoxCardLink results={dataMock} />)

  const input = screen.getByRole('textbox')
  expect(input).toBeInTheDocument()
})

test('show a list element in <BoxCardLink />', () => {
  render(<BoxCardLink results={dataMock} />)

  const list = screen.getByRole('list')
  expect(list).toBeInTheDocument()
})
