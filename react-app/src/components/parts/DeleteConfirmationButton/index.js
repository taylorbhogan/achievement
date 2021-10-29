import { useState } from "react"
import DeleteConfirmation from "../DeleteConfirmation";

import { FaTrashAlt } from 'react-icons/fa'
import { IconContext } from "react-icons";

import styles from './DeleteConfirmationButton.module.css'

const DeleteConfirmationButton = ({ showConfirmationFunction, handleDelete }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  return (
    <div>
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
        <DeleteConfirmation
          handleDelete={handleDelete}
          closeDeleteConfirmation={() => setShowDeleteConfirmation(false)}
          componentLocation={'habitLog'} />}
    </div>
  )
}

export default DeleteConfirmationButton
