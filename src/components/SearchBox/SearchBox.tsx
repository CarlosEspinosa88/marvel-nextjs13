import Input from '@components/Input'
import { SearchBoxTypes } from '@customTypes/customTypes'

function SearchBox({ handleInputValue, inputValue }: SearchBoxTypes) {
  return (
    <div>
      <Input
        id='123'
        value={inputValue}
        label='Search'
        maxLength={10}
        placeholder='Write here you hero'
        onChange={handleInputValue}
      />
    </div>
  )
}

export default SearchBox
