import { useState } from "react"
import { useDispatch } from "react-redux"
import { createAchievement } from "../../store/achievement"

import styles from './CreateAchievementButton.module.css'

const CreateAchievementButton = ({habit, setErrors}) => {
  const [isChecked, setIsChecked] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const achievement = {
      habit_id: habit.id,
      is_stellar: false,
    }

    const dbAchievement = await dispatch(createAchievement(achievement))
    if (dbAchievement.errors) {
      setErrors(dbAchievement.errors)
    } else {
      setIsChecked(true)
    }

  }

  return (
    <div className={styles.cubeWrapper}>
      <form onSubmit={handleSubmit}>
        <button className={styles.achieveCube}></button>
      </form>
    </div>
  )
}

export default CreateAchievementButton
