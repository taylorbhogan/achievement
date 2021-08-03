import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHabits } from "../../store/habit"
import LoadingContent from "../LoadingContent"
import HabitLogCard from "../HabitLogCard"
import CreateHabitButton from "../CreateHabitButton"
import styles from './HabitLog.module.css'

const HabitLog = () => {
  const dispatch = useDispatch()

  const reduxHabits = useSelector(state => Object.values(state.habits.habits))
  const user = useSelector(state => state.session.user)

  // const [ habits, setHabits ] = useState([])
  const [ isLoaded, setIsLoaded ] = useState(false)

  useEffect(() => {
    dispatch(getHabits(user.id))
  }, [dispatch, user.id])

  // useEffect(() => {
  //   if (Object.keys(reduxHabits).length > 0) {
  //     setIsLoaded(true)
  //     setHabits(Object.values(reduxHabits))
  //   }
  // }, [reduxHabits])

  // if (!isLoaded){
  //   return <LoadingContent />
  // }

  return (
    <div className={styles.container}>
      <div className={styles.welcome}>Welcome</div>
      <div className={styles.makeMeRight}>
        <CreateHabitButton />
      </div>
      <div className={styles.habitContainer}>
      {reduxHabits && reduxHabits.filter(habit => habit.name !== 'DELETED').map((habit, idx) => {
          return <HabitLogCard
            key={idx}
            habit={habit}
            isLoaded={isLoaded}
          /> })}
      </div>
    </div>
  )
}

export default HabitLog
