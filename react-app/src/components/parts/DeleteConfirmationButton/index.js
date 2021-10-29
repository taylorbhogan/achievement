import { useState } from "react"
import { FaTrashAlt } from 'react-icons/fa'
import { IconContext } from "react-icons";
import CloseButton from "../CloseButton";
import DeleteButton from "../DeleteButton";
import styles from './DeleteConfirmationButton.module.css'

const DeleteConfirmationButton = ({ handleDelete }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  const deleteHandler = () => {
    setShowDeleteConfirmation(false)
    handleDelete()
  }

  return (
    <>
      <button
        className={styles.button}
        onClick={() => setShowDeleteConfirmation(true)}
        id='deleteConfirmationButton'
      >
        <IconContext.Provider value={{ className: "react-icons" }}>
          <FaTrashAlt />
        </IconContext.Provider>
      </button>
      {showDeleteConfirmation &&
        <div className={styles.div}>
          <div className={styles.top}>
            <div>
              <div>Deleting is permanent.</div>
              {/* <div>permanent.</div> */}
            </div>
            {/* <CloseButton closeForm={() => setShowDeleteConfirmation(false)} /> */}
          </div>
          <DeleteButton handleDelete={deleteHandler} />
        </div>
      }
    </>
  )
}

export default DeleteConfirmationButton
