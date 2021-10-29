import { useState, useRef, useEffect } from "react"
import { FaTrashAlt } from 'react-icons/fa'
import { IconContext } from "react-icons";
import DeleteButton from "../DeleteButton";
import styles from './DeleteConfirmationButton.module.css'

const DeleteConfirmationButton = ({ handleDelete }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const menuRef = useRef()

  useEffect(() => {
    const handler = e => {
      if (!menuRef.current.contains(e.target)) {
        setShowDeleteConfirmation(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  const deleteHandler = () => {
    setShowDeleteConfirmation(false)
    handleDelete()
  }

  return (
    <div ref={menuRef}>
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
            </div>
          </div>
          <DeleteButton handleDelete={deleteHandler} />
        </div>
      }
    </div>
  )
}

export default DeleteConfirmationButton
