import styles from './FormErrors.module.css'

const FormErrors = ({ errors }) => {

  return (
    <>
      {errors.length > 0 && (
        <div className={styles.div}>
          <div>Please make these changes to continue:</div>
          {errors.map(error => <div>{error.split(':')[1].trim()}</div>)}
        </div>
      )}
    </>
  )
}

export default FormErrors;
