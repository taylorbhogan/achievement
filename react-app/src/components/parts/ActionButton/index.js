import styles from './ActionButton.module.css'

function ActionButton({ buttonText }) {
  return (
    <div>
      <button
        className={styles.button}
        type='submit'
        >{buttonText}</button>
    </div>
  )
}

export default ActionButton
