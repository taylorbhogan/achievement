import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAchievements } from "../../../store/achievement"
import { getHabits } from "../../../store/habit"
import LoadingContent from "../../parts/LoadingContent"
import AchievementLogCard from "../AchievementLogCard"
import styles from './AchievementLog.module.css'

const AchievementLog = () => {
  const [ isLoaded, setIsLoaded ] = useState(false)

  const dispatch = useDispatch()

  const habits = useSelector(state => Object.values(state.habits.habits))
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(getHabits(user.id))
  },[user.id, dispatch])

  const achievements = useSelector(state => Object.values(state.achievements.achievements).sort((first, second) => {
    if (new Date(first.created_at) > new Date(second.created_at)) return -1
    if (new Date(first.created_at) < new Date(second.created_at)) return 1
    return 0
      }))


  useEffect(() => {
    dispatch(getAchievements(user.id))
  }, [dispatch, user.id])

  return (
    <div className={styles.container}>
      <div className={styles.header}>Everything you've achieved.</div>
      <div className={styles.achievementContainer}>
      {(habits.length === 0 || (habits.length > 0 && achievements.length === 0)) &&
          <LoadingContent />
        }
        {achievements.length > 0 && achievements.filter(achievement => achievement.habit !== 'DELETED').map((achievement, idx) => {
            return <AchievementLogCard
              key={idx}
              achievement={achievement}
              isLoaded={isLoaded}
            /> })}
      </div>
    </div>
  )
}
 export default AchievementLog
