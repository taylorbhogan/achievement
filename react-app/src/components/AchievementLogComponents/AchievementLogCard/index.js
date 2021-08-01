import { useState } from "react"
import { useDispatch } from "react-redux"

import LoadingContent from "../../LoadingContent"
import EditButton from "../../parts/EditButton"
import { deleteAchievement } from "../../../store/achievement"
import AchievementEdit from "../AchievementEdit"
import CloseButton from "../../parts/CloseButton"
import DeleteConfirmationButton from "../../parts/DeleteConfirmationButton"
import DeleteConfirmation from "../../parts/DeleteConfirmation"

import styles from './AchievementLogCard.module.css'

const AchievementLogCard = ({ achievement, isLoaded }) => {
  const [isEditable, setIsEditable] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  const dispatch = useDispatch()
  // const user = useSelector(state => state.session.user)

  // const [isEditable, setIsEditable] = useState(false)
  // const [name, setName] = useState(habit.name)
  // const [blurb, setBlurb] = useState(habit.blurb)
  // const [stellarBlurb, setStellarBlurb] = useState(habit.stellar_blurb)
  // const [target, setTarget] = useState(habit.target)
  // const [errors, setErrors] = useState([])


  const handleDelete = () => {
    dispatch(deleteAchievement(achievement.id))
  }

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

  if (!isLoaded){
    return <LoadingContent />
  }
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

  const closeForm = () => {
    setIsEditable(false)
  }
  const closeDeleteConfirmation = () => {
    setShowDeleteConfirmation(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div className={styles.nameWrapper}>
          {achievement.habit_name}</div>
        <div className={styles.dateContainer}>
          <div>{formattedTime(achievement.created_at)}</div>
          <div>{formattedDate(achievement.created_at)}</div>
        </div>
        <div className={styles.buttonDiv}>
          <EditButton setIsEditable={setIsEditable} />
          <DeleteConfirmationButton showConfirmationFunction={() => setShowDeleteConfirmation(true)} />
          {showDeleteConfirmation &&
            <DeleteConfirmation
              handleDelete={handleDelete}
              closeDeleteConfirmation={closeDeleteConfirmation} />}
        </div>
      </div>
      {(isEditable &&
        <div className={styles.edit}>
          <div className={styles.close}><CloseButton closeForm={closeForm} /></div>
          <AchievementEdit />
        </div>)}
    </div>
  )
}

export default AchievementLogCard
