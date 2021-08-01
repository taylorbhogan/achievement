import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAchievements } from "../../../store/achievement"
import LoadingContent from "../../LoadingContent"
import AchievementLogCard from "../AchievementLogCard"
import styles from './AchievementLog.module.css'

const AchievementLog = () => {
  const [ achievements, setAchievements ] = useState([])
  const [ isLoaded, setIsLoaded ] = useState(false)

  const dispatch = useDispatch()
  const reduxAchievements = useSelector(state => Object.values(state.achievements.achievements))
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(getAchievements(user.id))
  }, [dispatch, user.id])

  useEffect(() => {
    if (Object.keys(reduxAchievements).length > 0) {
      setIsLoaded(true)
      setAchievements(Object.values(reduxAchievements))
    }
  }, [reduxAchievements])

  if (!isLoaded){
    return <LoadingContent />
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>Hello from AchievementLog</div>
      <div className={styles.achievementContainer}>
        {achievements.map((achievement, idx) => {
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
