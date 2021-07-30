import { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { IconContext } from "react-icons";

import { Modal } from '../../context/Modal'
import EditHabitForm from '../EditHabitForm'
import styles from './EditHabitButton.module.css'

function EditHabitButton({habit, setIsEditable}) {
  // const [ showEditHabitForm, setShowEditHabitForm ] = useState(false)

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
      {/* {showEditHabitForm && (
        <Modal onClose={() => setShowEditHabitForm(false)}>
          <EditHabitForm habit={habit} setShowEditHabitForm={setShowEditHabitForm} />
        </Modal>
      )} */}
    </div>
  )
}

export default EditHabitButton
