import { useEffect, useState } from 'react'

type props = {
  label: string
  value?: string
  onValueChange: (value: string) => void
}

const InputField = ({ label, onValueChange, value = '' }: props) => {
  const [fieldValue, setFieldValue] = useState(value)
  const [displayLabel, setDisplayLabel] = useState(false)

  useEffect(() => {
    if (value.length > 0) {
      setDisplayLabel(false)
    } else {
      setDisplayLabel(true)
    }
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value)
    setFieldValue(e.target.value)
  }

  return (
    <div className="container mx-auto">
      <div className="max-w-md mx-auto relative">
        <input
          type="text"
          id="inputField"
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-blue-500 focus:border-blue-500 peer"
          placeholder="Enter text here"
          value={fieldValue}
          onChange={(e) => handleChange(e)}
        />
        {displayLabel ? (
          <label
            htmlFor="inputField"
            className="absolute left-3 top-2 text-gray-400 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-3 peer-focus:left-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-blue-500"
          >
            {label}
          </label>
        ) : (
          <label
            htmlFor="inputField"
            className="absolute left-2 -top-1 px-1 bg-white -mt-2 text-gray-400 peer-focus:text-blue-500"
          >
            {label}
          </label>
        )}
      </div>
    </div>
  )
}

export default InputField
