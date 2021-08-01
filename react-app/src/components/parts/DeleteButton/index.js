import styles from './DeleteButton.module.css'

const DeleteButton = ({handleDelete}) => {
  return (
    <button
      onClick={handleDelete}
      className={styles.button}>Delete</button>
  )
}

export default DeleteButton
