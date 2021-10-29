import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import HabitLogCardDetails from "../HabitLogCardDetails"
import InputField from "../parts/InputField"
import FormErrors from "../parts/FormErrors"
import HabitLogCardDetailsEdit from "../HabitLogCardDetailsEdit"
import DeleteConfirmationButton from "../parts/DeleteConfirmationButton"
import DeleteConfirmation from "../parts/DeleteConfirmation"
import EditButton from "../parts/EditButton"
import CloseButton from "../parts/CloseButton"

import { deleteHabit } from "../../store/habit"
import { editHabit } from "../../store/habit"

import styles from './HabitLogCard.module.css'

const HabitLogCard = ({ habit }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [isEditable, setIsEditable] = useState(false)
  const [name, setName] = useState(habit.name)
  const [blurb, setBlurb] = useState(habit.blurb)
  const [stellarBlurb, setStellarBlurb] = useState(habit.stellar_blurb)
  const [target, setTarget] = useState(habit.target)
  const [errors, setErrors] = useState([])


  const handleDelete = () => {
    setShowDeleteConfirmation(false)

    dispatch(deleteHabit(habit.id))
  }

  const closeForm = () => {
    setIsEditable(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors([])
    if (e.currentTarget.id === 'deleteConfirmationButton') {
      dispatch(deleteHabit(habit.id))
    } else {

      const updatedHabit = {
        id: habit.id,
        user_id: user.id,
        name,
        blurb,
        stellar_blurb: stellarBlurb,
        target: +target,
        color_id: 1
      }

      const dbHabit = await dispatch(editHabit(updatedHabit))
      if (dbHabit.errors) {
        setErrors(dbHabit.errors)
      } else {
        setIsEditable(false)
      }
    }
  }

  const closeDeleteConfirmation = () => {
    setShowDeleteConfirmation(false)
  }

  return (
    <div
      className={styles.container}
      id={habit.id}
    >
      {isEditable ? (
        <form onSubmit={handleSubmit}>
          <FormErrors errors={errors} />
          <div className={styles.bar}>
            <div className={styles.nameWrapper}>
              <InputField
                name='name'
                type='text'
                placeholder='Pushups'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <CloseButton closeForm={closeForm} />
          </div>
          <HabitLogCardDetailsEdit
            habit={habit}
            closeForm={closeForm}
            blurb={blurb}
            setBlurb={setBlurb}
            stellarBlurb={stellarBlurb}
            setStellarBlurb={setStellarBlurb}
            target={target}
            setTarget={setTarget} />
        </form>
      ) : (
        <>
          <div className={styles.bar}>
            <div className={styles.nameWrapper}>
              <div className={styles.name}>{habit.name}</div>
            </div>
            <div className={styles.buttonDiv}>
              <EditButton setIsEditable={setIsEditable} />
              <DeleteConfirmationButton showConfirmationFunction={() => setShowDeleteConfirmation(true)} />
              {showDeleteConfirmation &&
                <DeleteConfirmation
                  handleDelete={handleDelete}
                  closeDeleteConfirmation={closeDeleteConfirmation}
                  componentLocation={'habitLog'} />}
            </div>
          </div>
          <HabitLogCardDetails
            habit={habit}
            setIsEditable={setIsEditable}
          />
        </>
      )}
    </div>
  )
}

export default HabitLogCard
