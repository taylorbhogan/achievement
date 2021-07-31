import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
// import { getAchievements } from "../../store/achievement"
import LoadingContent from "../../LoadingContent"
import AchievementLogCard from "../AchievementLogCard"
import styles from './AchievementLog.module.css'

const AchievementLog = () => {
  // const dispatch = useDispatch()

  const [ achievements, setAchievements ] = useState([])
  const [ isLoaded, setIsLoaded ] = useState(false)

  const reduxAchievements = useSelector(state => state.habits.habits)
  // const userHabits = useSelector(state => Object.values(state.session.user.habits))

  // grab from Redux all of the logged in user's habits, each of which has an array of achievements
  const userHabits = useSelector(state => Object.values(state.session.user.habits.filter(habit=>habit.blurb !== 'DELETED')))
  // declare output array
  const userAchievements = []
  // for each of a user's habits,
  userHabits.forEach(habit => {
    // grab each of their achievements
    habit.achievements.map(achievement => {
      // and give it a key of habit_name with a value of the habit's name
      achievement.habit_name = habit.name
      return achievement
    })
    // spread all of the achievements for each habit out into the output array
    return userAchievements.push(...habit.achievements) })
  console.log('------------userAchievements------------',userAchievements);


  // useEffect(() => {
  //   dispatch(getAchievements(user.id))
  // }, [dispatch, user.id])

  // useEffect(() => {
  //   if (Object.keys(userAchievements).length > 0) {
  //     setIsLoaded(true)
  //     setAchievements(Object.values(userAchievements))
  //   }
  // }, [userAchievements])

  // if (!isLoaded){
  //   return <LoadingContent />
  // }


  return (
    <div className={styles.container}>
      <div className={styles.header}>Hello from AchievementLog</div>
      <div className={styles.achievementContainer}>
        {userAchievements.map((achievement, idx) => {
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
