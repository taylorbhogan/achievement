import { useState } from 'react'

import { Modal } from '../../context/Modal'

import EditHabitForm from '../EditHabitForm'

function EditHabitButton({habit}) {
  const [ showEditHabitForm, setShowEditHabitForm ] = useState(false)

  return (
    <div>
      <button
        onClick={() => setShowEditHabitForm(true)}
      >Edit this Habit</button>
      {showEditHabitForm && (
        <Modal onClose={() => setShowEditHabitForm(false)}>
          <EditHabitForm habit={habit} setShowEditHabitForm={setShowEditHabitForm} />
        </Modal>
      )}
    </div>
  )
}

export default EditHabitButton
