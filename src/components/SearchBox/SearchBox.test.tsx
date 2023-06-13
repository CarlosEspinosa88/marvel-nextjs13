import { screen, render, fireEvent } from '@testing-library/react'
import user from "@testing-library/user-event";
import SearchBox from './SearchBox'


test('render <SearchBox />', () => {
  render(<SearchBox />)
  
  const input = screen.getByRole('textbox', { name: /search/i })
  expect(input).toBeInTheDocument()
})

test('handle the new value', () => {
  const heroName = 'Spider-Man'
  const mock = jest.fn();
  
  mock.mockImplementation((e) => {
    expect(e.target.value).toBe(heroName);
  })

  render(<SearchBox handleInputValue={mock} />)

  const input = screen.getByRole('textbox', { name: /search/i })
  fireEvent.change(input , { target: { value: heroName } })

  expect(mock).toHaveBeenCalled()
  expect(mock).toHaveBeenCalledTimes(1)
  expect(input).toHaveDisplayValue(heroName)
})