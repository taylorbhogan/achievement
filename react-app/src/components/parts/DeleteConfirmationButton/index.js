import { FaTrashAlt } from 'react-icons/fa'
import { IconContext } from "react-icons";

import styles from './DeleteConfirmationButton.module.css'

const DeleteConfirmationButton = ({ handleDelete }) => {
  return (
    <div>
      <button
        className={styles.button}
        onClick={handleDelete}
      >
        <IconContext.Provider value={{ className: "react-icons" }}>
          <FaTrashAlt />
        </IconContext.Provider>
      </button>
    </div>
  )
}

export default DeleteConfirmationButton
