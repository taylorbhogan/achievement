import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAchievements } from "../../store/achievement"
import { getHabits } from "../../store/habit"
import LoadingContent from "../parts/LoadingContent"
import NoHabits from '../parts/NoHabits'
import NoAchievements from '../parts/NoAchievements'
import AchievementLogCard from "../AchievementLogCard"
import styles from './AchievementLog.module.css'

const AchievementLog = () => {
  const dispatch = useDispatch()

  const habits = useSelector(state => Object.values(state.habits.habits))
  const user = useSelector(state => state.session.user)

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(getHabits(user.id))
  }, [user.id, dispatch])

  const achievements = useSelector(state => Object.values(state.achievements.achievements).sort((first, second) => {
    if (new Date(first.created_at) > new Date(second.created_at)) return -1
    if (new Date(first.created_at) < new Date(second.created_at)) return 1
    return 0
  }))

  useEffect(() => {
    const fetchAchievements = async () => {
      await dispatch(getAchievements(user.id))
      setIsLoaded(true)
    }
    fetchAchievements()
  }, [dispatch, user.id])

  return isLoaded ? (
    habits.filter(habit => habit.name !== 'DELETED').length > 0 ? (
      achievements.length > 0 ? (
        <div className={styles.container}>
          <div className={styles.header}>Everything you've achieved.</div>
          <div className={styles.achievementContainer}>
            {achievements.filter(achievement => achievement.habit !== 'DELETED').map((achievement, idx) => {
              return <AchievementLogCard
                key={idx}
                achievement={achievement}
              />
            })}
          </div>
        </div>
      ) : (
        <NoAchievements />
      )
    ) : (
      <NoHabits />
    )
  ) : (
    <LoadingContent />
  )
}
export default AchievementLog;
