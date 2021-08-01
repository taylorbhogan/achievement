import CloseButton from '../CloseButton'
import DeleteButton from '../DeleteButton'
import styles from './DeleteConfirmation.module.css'

const DeleteConfirmation = ({closeDeleteConfirmation, handleDelete}) => {
  return (
    <div className={styles.div}>
      <CloseButton closeForm={closeDeleteConfirmation}/>
      <div>Deleting is</div>
      <div>permanent.</div>
      <DeleteButton handleDelete={handleDelete}/>
    </div>
  )
}

export default DeleteConfirmation
