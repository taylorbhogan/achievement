function FormNewHabit({ setShowNewHabitForm }) {
  return (
    <div>
      <div>Hello from FormNewHabit</div>
      <button
        onClick={() => setShowNewHabitForm(false)}
      >Close</button>

    </div>
  )
}

export default FormNewHabit
