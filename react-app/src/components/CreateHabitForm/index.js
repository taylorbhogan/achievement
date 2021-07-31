import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActionButton from '../parts/ActionButton'
import FormErrors from '../parts/FormErrors'
import InputField from '../parts/InputField'
import styles from './CreateHabitForm.module.css'
import { createHabit } from '../../store/habit'
import CloseButton from '../parts/CloseButton'


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
        <form
          onSubmit={handleSubmit}
        >
          <div className={styles.top}>
            <div onClick={() => setShowNewHabitForm(false)} className={styles.close}><CloseButton /></div>
            <FormErrors errors={errors} />
            <div className={styles.name}>
              <InputField
                name='name'
                type='text'
                placeholder='Pushups'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.info}>
              <div className={styles.left}>
                <div className={styles.header}>What does achievement look like?</div>

                <InputField
                  name='blurb'
                  type='textarea'
                  placeholder='15x 3/day'
                  value={blurb}
                  onChange={(e) => setBlurb(e.target.value)}
                />
              </div>
              <div className={styles.center}>
                <div className={styles.header}>What does stellar achievement look like?</div>
                <InputField
                  name='stellar_blurb'
                  type='textarea'
                  placeholder='100 in one day'
                  value={stellarBlurb}
                  onChange={(e) => setStellarBlurb(e.target.value)}
                />
              </div>
              <div className={styles.right}>
                <div className={styles.header}>Weekly Target:</div>
                <div className={styles.target}>
                  <InputField
                    name='target'
                    type='number'
                    placeholder='7'
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <ActionButton buttonText={'save changes'} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateHabitForm
