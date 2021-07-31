import { FaEdit } from 'react-icons/fa'
import { IconContext } from "react-icons";

import styles from './EditButton.module.css'

function EditButton({setIsEditable}) {

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => setIsEditable(true)}
      >
        <IconContext.Provider value={{ className: "react-icons" }}>
          <FaEdit />
        </IconContext.Provider>
      </button>
    </div>
  )
}

export default EditButton
