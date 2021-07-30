import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// perhaps I'll move these back here and render them if the user toggles on edit mode
// import EditHabitButton from "../EditHabitButton"
// import DeleteButton from "../parts/DeleteButton"
import LoadingContent from "../LoadingContent"
import HabitCube from "../HabitCube"
import CreateAchievementButton from "../CreateAchievementButton"
import HabitLogCardDetails from "../HabitLogCardDetails"
import InputField from "../parts/InputField"
import FormErrors from "../parts/FormErrors"
import HabitLogCardDetailsEdit from "../HabitLogCardDetailsEdit"

import { deleteHabit } from "../../store/habit"
import { editHabit } from "../../store/habit"

import styles from './HabitLogCard.module.css'
import ActionButton from "../parts/ActionButton"

const HabitLogCard = ({ habit, isLoaded }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  const [isEditable, setIsEditable] = useState(false)
  const [name, setName] = useState(habit.name)
  const [blurb, setBlurb] = useState(habit.blurb)
  const [stellarBlurb, setStellarBlurb] = useState(habit.blurb)
  const [target, setTarget] = useState(habit.target)
  const [errors, setErrors] = useState([])


  const handleDelete = () => {
    dispatch(deleteHabit(habit.id))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedHabit = {
      id: habit.id,
      user_id: user.id,
      name,
      blurb,
      stellar_blurb: stellarBlurb,
      target: +target,
      color_id: 1
    }
    console.log('------updatedHabit', updatedHabit);



    const dbHabit = await dispatch(editHabit(updatedHabit))
    if (dbHabit.errors) {
      setErrors(dbHabit.errors)
    } else {
      setIsEditable(false)
    }
  }

  if (!isLoaded){
    return <LoadingContent />
  }

  return (
    <div
      className={styles.container}
      id={habit.id}
      >
      <form onSubmit={handleSubmit}>
      <FormErrors errors={errors} />
        <div className={styles.bar}>
          <div className={styles.nameWrapper}>
            {!isEditable && <div className={styles.name}>{habit.name}</div>}
            {isEditable &&
              <InputField
              name='name'
              type='text'
              placeholder='Pushups'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />}
          </div>
          <div className={styles.cubeContainer}>
            <HabitCube />
            <HabitCube />
            <HabitCube />
            <HabitCube />
            <HabitCube />
            <HabitCube />
            <CreateAchievementButton />
          </div>
        </div>
        {!isEditable && <HabitLogCardDetails
          handleDelete={handleDelete}
          habit={habit}
          setIsEditable={setIsEditable}
          />}
        {isEditable && <HabitLogCardDetailsEdit
          handleDelete={handleDelete}
          habit={habit}
          setIsEditable={setIsEditable}
          blurb={blurb}
          setBlurb={setBlurb}
          stellarBlurb={stellarBlurb}
          setStellarBlurb={setStellarBlurb}
          target={target}
          setTarget={setTarget}/>}
        {isEditable && <ActionButton buttonText={'save'} />}
      </form>
    </div>
  )
}

export default HabitLogCard
