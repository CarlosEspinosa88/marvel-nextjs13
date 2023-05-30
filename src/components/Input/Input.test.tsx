import { screen, render } from '@testing-library/react'
import user from "@testing-library/user-event";
import Input from './Input'

const inputValues = {
  id: '1234',
  label: 'My Test',
  maxLength: 10,
  value: 'Carlos',
  placeholder: 'Escriba acá',
  onChange: () => null
}

test('render <Input />', () => {
  render(
    <Input 
      id={inputValues.id}
      label={inputValues.label}
      maxLength={inputValues.maxLength}
    />
  )

  const input = screen.getByRole('textbox', { name: /my test/i })
  expect(input).toBeInTheDocument();
})

test('get the input value', async () => {  
  render(
    <Input 
      id={inputValues.id}
      label={inputValues.label}
      maxLength={inputValues.maxLength}
      placeholder={inputValues.placeholder}
    />
  )

  const input = screen.getByRole('textbox', { name: /my test/i })
  
  await user.click(input)
  await user.keyboard(inputValues.value)

  expect(input).toHaveValue('Carlos')
})