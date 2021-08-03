import { FaTrashAlt } from 'react-icons/fa'
import { IconContext } from "react-icons";

import styles from './DeleteConfirmationButton.module.css'

const DeleteConfirmationButton = ({ showConfirmationFunction }) => {
  return (
    <div>
      <button
        className={styles.button}
        onClick={showConfirmationFunction}
        id='deleteConfirmationButton'
      >
        <IconContext.Provider value={{ className: "react-icons" }}>
          <FaTrashAlt />
        </IconContext.Provider>
      </button>
    </div>
  )
}

export default DeleteConfirmationButton
