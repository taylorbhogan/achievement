import styles from './ActionButton.module.css'

function ActionButton({ buttonText, isShort=false }) {
  return (
    <div>
      <button
        className={styles.button}
        type='submit'
        style={isShort ? { padding: '.4rem 1.5rem'} : null}
        >{buttonText}</button>
    </div>
  )
}

export default ActionButton
