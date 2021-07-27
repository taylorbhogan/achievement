import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonAddHabit from '../ButtonAddHabit'
import styles from './FormNewHabit.module.css'
import { createHabit } from '../../store/habit'

function FormNewHabit({ setShowNewHabitForm }) {
  const [ name, setName ] = useState('name')
  const [ blurb, setBlurb ] = useState('blurb')
  const [ stellarBlurb, setStellarBlurb ] = useState('stellarBlurb')
  const [ target, setTarget ] = useState('stellarBlurb')

  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const habit = {
      userId: user.id,
      name,
      blurb,
      stellarBlurb,
      target: +target,
    }
    console.log('------habit', habit);
    const createdHabit = dispatch(createHabit(habit))
    console.log('-------createdHabit',createdHabit);

  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div>Hello from FormNewHabit</div>
        <button
          onClick={() => setShowNewHabitForm(false)}
          >Close</button>
        <form
          onSubmit={handleSubmit}
          >
          <div>
            <div>Habit name</div>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <div>What does achievement look like?</div>
            <textarea
              value={blurb}
              onChange={(e) => setBlurb(e.target.value)}
              />
          </div>
          <div>
            <div>What does stellar achievement look like?</div>
            <textarea
              value={stellarBlurb}
              onChange={(e) => setStellarBlurb(e.target.value)}
              />
          </div>
          <div>
            <div>How many days per week do you want to achieve this goal?</div>
            <input
              type='number'
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              />
          </div>
          <ButtonAddHabit />
        </form>
      </div>
    </div>
  )
}

export default FormNewHabit
