import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import LoadingContent from "../../LoadingContent"
import HabitCube from "../../HabitCube"
import CreateAchievementButton from "../../CreateAchievementButton"
import HabitLogCardDetails from "../../HabitLogCardDetails"
import InputField from "../../parts/InputField"
import FormErrors from "../../parts/FormErrors"
import HabitLogCardDetailsEdit from "../../HabitLogCardDetailsEdit"
import EditButton from "../../parts/EditButton"
import { deleteHabit } from "../../../store/habit"
import { editHabit } from "../../../store/habit"
import AchievementEdit from "../AchievementEdit"

import styles from './AchievementLogCard.module.css'

const AchievementLogCard = ({ achievement, isLoaded }) => {
  const [isEditable, setIsEditable] = useState(false)

  // const dispatch = useDispatch()
  // const user = useSelector(state => state.session.user)

  // const [isEditable, setIsEditable] = useState(false)
  // const [name, setName] = useState(habit.name)
  // const [blurb, setBlurb] = useState(habit.blurb)
  // const [stellarBlurb, setStellarBlurb] = useState(habit.stellar_blurb)
  // const [target, setTarget] = useState(habit.target)
  // const [errors, setErrors] = useState([])


  // const handleDelete = () => {
  //   dispatch(deleteHabit(habit.id))
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const updatedHabit = {
  //     id: habit.id,
  //     user_id: user.id,
  //     name,
  //     blurb,
  //     stellar_blurb: stellarBlurb,
  //     target: +target,
  //     color_id: 1
  //   }

  //   const dbHabit = await dispatch(editHabit(updatedHabit))
  //   if (dbHabit.errors) {
  //     setErrors(dbHabit.errors)
  //   } else {
  //     setIsEditable(false)
  //   }
  // }

  // if (!isLoaded){
  //   return <LoadingContent />
  // }
  const formattedDate = (date) => {
    const jsDate = new Date(date)
    const formattedDate = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' }).format(jsDate)
    return formattedDate
  }
  const formattedTime = (date) => {
    const jsDate = new Date(date)
    const formattedDate = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', timeZoneName: 'short' }).format(jsDate)
    return formattedDate
  }

  return (
    <div className={styles.container}>
      <div className={styles.nameWrapper}>{achievement.habit_name}</div>
      {/* <div>{achievement.created_at}</div> */}
      <div className={styles.dateContainer}>
        <div>{formattedTime(achievement.created_at)}</div>
        <div>{formattedDate(achievement.created_at)}</div>
      </div>
      <div className={styles.buttonDiv}>
        <EditButton setIsEditable={setIsEditable}/>
      </div>
      {(isEditable && <div className={styles.edit}><AchievementEdit /></div>)}
    </div>
  )
}

export default AchievementLogCard
