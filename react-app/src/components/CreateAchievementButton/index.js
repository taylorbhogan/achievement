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
    // console.log('----------component achievement---------',achievement);
    const dbAchievement = await dispatch(createAchievement(achievement))
    if (dbAchievement.errors) {
      setErrors(dbAchievement.errors)
    } else {
      setIsChecked(true)
    }

  }

  return (
      <form onSubmit={handleSubmit}>
    <div className={styles.cubeWrapper}>
        {!isChecked && <button className={styles.achieveCube}></button>}
        {isChecked && <button className={styles.achieveCubeChecked}></button>}
    </div>
      </form>
  )
}

export default CreateAchievementButton
