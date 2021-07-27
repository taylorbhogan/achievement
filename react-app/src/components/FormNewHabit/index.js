import { useState } from 'react'

function FormNewHabit({ setShowNewHabitForm }) {
  const [ name, setName ] = useState('')

  return (
    <div>
      <div>Hello from FormNewHabit</div>
      <button
        onClick={() => setShowNewHabitForm(false)}
      >Close</button>
      <form>
        <div>
          <div>Habit name</div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default FormNewHabit
