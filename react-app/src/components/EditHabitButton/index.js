import { FaEdit } from 'react-icons/fa'
import { IconContext } from "react-icons";

import styles from './EditHabitButton.module.css'

function EditHabitButton({setIsEditable}) {

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

export default EditHabitButton
