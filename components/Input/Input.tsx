import { ChangeEvent } from 'react'

type InputTypes = {
  id: string,
  label: string,
  value: string,
  placeholder: string,
  maxLength: number,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

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
      <p>
        {label}
      </p>
      <input
        id={id}
        maxLength={maxLength}
        type="text"
        value={value}
        enterKeyHint="next"
        placeholder={placeholder}
        onChange={onChange}
      /> 
    </div>
  )
}

export default Input