import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHabits } from "../../store/habit"
import LoadingContent from "../parts/LoadingContent"
import HabitLogCard from "../HabitLogCard"
import CreateHabitButton from "../CreateHabitButton"
import NoHabits from "../parts/NoHabits"
import styles from './HabitLog.module.css'

const HabitLog = () => {
  const dispatch = useDispatch()

  const habits = useSelector(state => Object.values(state.habits.habits))
  const user = useSelector(state => state.session.user)

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fetchHabits = async () => {
      await dispatch(getHabits(user.id))
      setIsLoaded(true)
    }
    fetchHabits()
  }, [dispatch, user.id])

  return (
    isLoaded ? (
      habits.filter(habit => habit.name !== 'DELETED').length > 0 ? (
        <div className={styles.container}>
          <div className={styles.welcome}>Clean house here.</div>
          <div className={styles.makeMeRight}>
            <CreateHabitButton componentStyle={'gray'} />
          </div>
          <div className={styles.habitContainer}>
            {habits && habits.filter(habit => habit.name !== 'DELETED').map((habit, idx) => {
              return <HabitLogCard
                key={idx}
                habit={habit}
              />
            })}
          </div>
        </div>
      ) : (
        <NoHabits />
      )
    ) : (
      <LoadingContent />
    )
  )
}

export default HabitLog;
