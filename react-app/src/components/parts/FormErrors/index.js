const FormErrors = ({ errors }) => {

  return (
    <>
      {errors.length > 0 && (
        <div>
          <div>Please make these changes to continue:</div>
          {errors.map(error => <div>{error.split(':')[1].trim()}</div>)}
        </div>
      )}
    </>
  )
}

export default FormErrors;
