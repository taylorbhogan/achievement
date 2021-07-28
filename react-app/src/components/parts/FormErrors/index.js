import { useEffect, useState } from 'react'


const FormErrors = ({ errors }) => {
  const [ formattedErrors, setFormattedErrors ] = useState([])

  useEffect(() => {
    const asFormatted = errors.map(error => {
      const field = error.split(':')[0].trim();
      return field[0].toUpperCase() + field.slice(1)
    })
    setFormattedErrors(asFormatted);
  }, [errors])

  return (
    <>
      {errors.length > 0 && (
        <div>
          <div>These fields have to be filled out to continue:</div>
          {formattedErrors.join(', ')}
        </div>
      )}
    </>
  )
}

export default FormErrors;
