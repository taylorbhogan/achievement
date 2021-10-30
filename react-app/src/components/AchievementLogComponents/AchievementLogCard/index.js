import { useState } from "react"
import { useDispatch } from "react-redux"

import EditButton from "../../parts/EditButton"
import { deleteAchievement } from "../../../store/achievement"
import CloseButton from "../../parts/CloseButton"
import DeleteConfirmationButton from "../../parts/DeleteConfirmationButton"
import InputField from '../../parts/InputField'
import ActionButton from "../../parts/ActionButton"
import FormErrors from "../../parts/FormErrors"
import { editAchievement } from "../../../store/achievement"

import styles from './AchievementLogCard.module.css'

const AchievementLogCard = ({ achievement }) => {

  
  const formatInputDate = (achieveCreateDate) => {
    const jsDate = new Date(achieveCreateDate)

    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(jsDate);
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(jsDate);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(jsDate);
    // const hour = new Intl.DateTimeFormat('en', { hour: '2-digit' }).format(jsDate);
    const hour = new Intl.DateTimeFormat('en', { hour: '2-digit' }).format(jsDate).slice(0, 2);
    let minute = new Intl.DateTimeFormat('en', { minute: '2-digit' }).format(jsDate);
    if (minute.length === 1) {
      minute = '0' + minute
    }
    return `${year}-${month}-${day}T${hour}:${minute}`
  }

  const formatOutputDate = (createdAt) => {
    const jsDate = new Date(createdAt)
    return jsDate
  }

  const [errors, setErrors] = useState([])
  const [isEditable, setIsEditable] = useState(false)
  const [createdAt, setCreatedAt] = useState(formatInputDate(achievement.created_at))
  const dispatch = useDispatch()

  const handleDelete = async () => {
    await dispatch(deleteAchievement(achievement.id))
  }

  const formattedDate = (date) => {
    const jsDate = new Date(date)
    if (jsDate > new Date().setHours(0, 0, 0, 0)) {
      return 'Today'
    }
    const formattedDate = new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'long', day: 'numeric' }).format(jsDate)
    return formattedDate
  }
  const formattedTime = (date) => {
    const jsDate = new Date(date)
    const formattedTime = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', timeZoneName: 'short' }).format(jsDate)
    return formattedTime
  }

  const closeForm = () => {
    setIsEditable(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const updatedAchievement = {
      id: achievement.id,
      habit_id: achievement.habit_id,
      is_stellar: false,
      created_at: formatOutputDate(createdAt)
    }
    const dbAchievement = await dispatch(editAchievement(updatedAchievement))
    if (dbAchievement.errors) {
      setErrors(dbAchievement.errors)
    } else {
      closeForm()
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.name}>{achievement.habit}</div>
      {isEditable ?
        <form className={styles.dateContainer} onSubmit={handleSubmit}>
          <FormErrors errors={errors} />
          <div className={styles.achieved}>Achieved:</div>
          <InputField
            name='name'
            type='datetime-local'
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
          />
          <ActionButton buttonText='Save' isShort={true} />
        </form>
        :
        <div className={styles.dateContainer}>
          <div>Achieved: {formattedDate(achievement.created_at)} at {formattedTime(achievement.created_at)}</div>
        </div>
      }
      <div className={styles.buttonDiv}>
        {isEditable ?
          <CloseButton closeForm={closeForm} />
          :
          <EditButton setIsEditable={setIsEditable} />}
        <DeleteConfirmationButton handleDelete={handleDelete} />
      </div>
    </div>
  )
}

export default AchievementLogCard
