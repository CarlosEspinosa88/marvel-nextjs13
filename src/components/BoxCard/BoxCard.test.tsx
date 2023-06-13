import { screen, render } from '@testing-library/react'
import user from "@testing-library/user-event";
import BoxCard from './BoxCard'

let dataMock = {
  id: 56,
  name: 'Spider-Man',
  thumbnail: {
    path: 'spiderman',
    extension: 'jpg',
  }
}

test('render image and text in <BoxCard />', () => {
  render(
    <BoxCard 
      id={dataMock.id}
      name={dataMock.name}
      thumbnail={dataMock.thumbnail}
    />
  )

  const image = screen.getByAltText(`${dataMock.id}-${dataMock.name}`)
  const text = screen.getByText('spider', { exact: false})

  expect(image).toBeInTheDocument()
  expect(text.textContent).toEqual(dataMock.name)
})