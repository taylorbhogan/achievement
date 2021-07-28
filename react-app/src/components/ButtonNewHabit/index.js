import { useState } from 'react'

import { Modal } from '../../context/Modal'

import CreateHabitForm from '../CreateHabitForm'

function ButtonNewHabit() {
  const [ showNewHabitForm, setShowNewHabitForm ] = useState(false)

  return (
    <div>
      <button
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

export default ButtonNewHabit
