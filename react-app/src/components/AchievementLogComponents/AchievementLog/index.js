import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAchievements } from "../../../store/achievement"
import LoadingContent from "../../LoadingContent"
import NoHabits from "../../parts/NoHabits"
import AchievementLogCard from "../AchievementLogCard"
import styles from './AchievementLog.module.css'

const AchievementLog = () => {
  // const [ achievements, setAchievements ] = useState([])
  const [ isLoaded, setIsLoaded ] = useState(false)

  const dispatch = useDispatch()
  // const reduxAchievements = useSelector(state => Object.values(state.achievements.achievements))
  // console.log('reduxAchievements', reduxAchievements);
  // const reduxAchievementsSorted = useSelector(state => Object.values(state.achievements.achievements).sort((first, second) => Date(second.created_at) - Date(first.created_at)))
  // console.log('reduxAchievementsSorted',reduxAchievementsSorted);
  const reduxHabits = useSelector(state => Object.values(state.habits.habits))


      // IRINA SORT
  const reduxAchievements = useSelector(state => Object.values(state.achievements.achievements).sort((first, second) => {
    if (new Date(first.created_at) > new Date(second.created_at)) return -1
    if (new Date(first.created_at) < new Date(second.created_at)) return 1
    return 0
      }))
  // NO SORTING
  // const reduxAchievements = useSelector(state => Object.values(state.achievements.achievements))
      // console.log('reduxAchievements---------->', reduxAchievements);
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(getAchievements(user.id))
  }, [dispatch, user.id])






  // useEffect(() => {
  //   if (Object.keys(achievements).length > 0) {
  //     console.log('reduxAchievements',reduxAchievements);
  //     setIsLoaded(true)
  //     setAchievements(Object.values(reduxAchievements))
  //   }
  // }, [])

  // if (!isLoaded){
  //   return <LoadingContent />
  // }

  return (
    <div className={styles.container}>
      <div className={styles.header}>Everything you've achieved.</div>
      <div className={styles.achievementContainer}>
      {reduxHabits.length === 0 &&
          <NoHabits />
        }
        {reduxAchievements.length > 0 && reduxAchievements.filter(achievement => achievement.habit !== 'DELETED').map((achievement, idx) => {
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
