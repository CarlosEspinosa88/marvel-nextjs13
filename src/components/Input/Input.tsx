import { InputTypes } from '@customTypes/customTypes'

function Input({
  id,
  label,
  value,
  placeholder,
  maxLength,
  onChange,
}: InputTypes) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        maxLength={maxLength}
        type='text'
        value={value}
        enterKeyHint='next'
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
