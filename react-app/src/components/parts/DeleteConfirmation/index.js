import CloseButton from '../CloseButton'
import DeleteButton from '../DeleteButton'
import styles from './DeleteConfirmation.module.css'

const DeleteConfirmation = ({closeDeleteConfirmation, handleDelete}) => {
  return (
    <div className={styles.div}>
      <div className={styles.top}>
        <div>
          <div>Deleting is</div>
          <div>permanent.</div>
        </div>
        <CloseButton closeForm={closeDeleteConfirmation}/>
      </div>
      {/* <div>permanent.</div> */}
      <DeleteButton handleDelete={handleDelete}/>
    </div>
  )
}

export default DeleteConfirmation
