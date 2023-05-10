import Input from '@components/Input'
import { InputValues } from '@customTypes/customTypes'


function SearchBox({ handleInputValue, inputValue }: InputValues) {
  return (
    <div>
      <Input 
        id="123"
        value={inputValue}
        label='Search'
        maxLength={10}
        placeholder="Write here you heroe"
        onChange={handleInputValue}
      /> 
    </div>
  )
}

export default SearchBox