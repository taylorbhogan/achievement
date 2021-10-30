import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActionButton from '../parts/ActionButton'
import FormErrors from '../parts/FormErrors'
import InputField from '../parts/InputField'
import styles from './HabitEditForm.module.css'
import { editHabit } from '../../store/habit'

function HabitEditForm({ habit, setShowHabitEditForm }) {
  const [name, setName] = useState(habit.name)
  const [blurb, setBlurb] = useState(habit.blurb)
  const [stellarBlurb, setStellarBlurb] = useState(habit.stellar_blurb)
  const [target, setTarget] = useState(habit.target)
  const [errors, setErrors] = useState([])

  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedHabit = {
      id: habit.id,
      user_id: user.id,
      name,
      blurb,
      stellar_blurb: stellarBlurb,
      target: +target,
    }
    // console.log('------updatedHabit', updatedHabit);



    const dbHabit = await dispatch(editHabit(updatedHabit))
    if (dbHabit.errors) {
      setErrors(dbHabit.errors)
    } else {
      setShowHabitEditForm(false)
    }
  }

  return (
    <div className={styles.container}>
      <div>Hello from HabitEditForm</div>
      <button
        onClick={() => setShowHabitEditForm(false)}
      >Close</button>
      <form
        onSubmit={handleSubmit}
      >
        <FormErrors errors={errors} />
        <div>
          <div>Habit name</div>
          <InputField
            name='name'
            type='text'
            placeholder='Pushups'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <div>What does achievement look like?</div>
          <InputField
            name='blurb'
            type='textarea'
            placeholder='15x 3/day'
            value={blurb}
            onChange={(e) => setBlurb(e.target.value)}
          />
        </div>
        <div>
          <div>What does stellar achievement look like?</div>
          <InputField
            name='stellar_blurb'
            type='textarea'
            placeholder='100 in one day'
            value={stellarBlurb}
            onChange={(e) => setStellarBlurb(e.target.value)}
          />
        </div>
        <div>
          <div>How many days per week do you want to achieve this goal?</div>
          <InputField
            name='target'
            type='number'
            placeholder='7'
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>
        <ActionButton buttonText={'save changes'}/>
      </form>
    </div>
  )
}

export default HabitEditForm
