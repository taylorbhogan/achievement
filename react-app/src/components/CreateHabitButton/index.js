import { useState } from 'react'

import { Modal } from '../../context/Modal'

import CreateHabitForm from '../CreateHabitForm'
import styles from './CreateHabitButton.module.css'

function CreateHabitButton() {
  const [ showNewHabitForm, setShowNewHabitForm ] = useState(false)

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => setShowNewHabitForm(true)}
      >Add a Habit</button>
      {showNewHabitForm && (
        <Modal onClose={() => setShowNewHabitForm(false)}>
          <CreateHabitForm setShowNewHabitForm={setShowNewHabitForm} />
        </Modal>
      )}
    </div>
  )
}

export default CreateHabitButton
