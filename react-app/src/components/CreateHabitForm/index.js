import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActionButton from '../parts/ActionButton'
import FormErrors from '../parts/FormErrors'
import InputField from '../parts/InputField'
import styles from './CreateHabitForm.module.css'
import { createHabit } from '../../store/habit'

function CreateHabitForm({ setShowNewHabitForm }) {
  const [name, setName] = useState('')
  const [blurb, setBlurb] = useState('')
  const [stellarBlurb, setStellarBlurb] = useState('')
  const [target, setTarget] = useState('')
  const [errors, setErrors] = useState([])

  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const habit = {
      user_id: user.id,
      name,
      blurb,
      stellar_blurb: stellarBlurb,
      target: +target,
      color_id: 1
    }

    const dbHabit = await dispatch(createHabit(habit))
    if (dbHabit.errors) {
      setErrors(dbHabit.errors)
    } else {
      setShowNewHabitForm(false)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div>Hello from CreateHabitForm</div>
        <button
          onClick={() => setShowNewHabitForm(false)}
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
          <ActionButton buttonText={'Add a habit'}/>
        </form>
      </div>
    </div>
  )
}

export default CreateHabitForm
