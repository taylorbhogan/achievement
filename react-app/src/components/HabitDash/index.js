import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getHabits } from "../../store/habit"
import HabitDashWelcome from "../HabitDashWelcome"
import HabitDashCard from "../HabitDashCard"
import CreateHabitButton from "../CreateHabitButton"
import LoadingContent from "../LoadingContent"
import styles from './HabitDash.module.css'

function HabitDash() {
  const dispatch = useDispatch()

  const reduxHabits = useSelector(state => state.habits.habits)
  const user = useSelector(state => state.session.user)

  const [ habits, setHabits ] = useState([])
  const [ isLoaded, setIsLoaded ] = useState(false)

  useEffect(() => {
    dispatch(getHabits(user.id))
  }, [dispatch, user.id])

  useEffect(() => {
    if (Object.keys(reduxHabits).length > 0) {
      setIsLoaded(true)
      setHabits(Object.values(reduxHabits))
    }
  }, [reduxHabits])


  if (!isLoaded){
    return <LoadingContent />
  }

  return (
    <div className={styles.container}>
      <HabitDashWelcome />
      <div className={styles.makeMeRight}>
        <CreateHabitButton />
      </div>
      <div className={styles.dashCardContainer}>
        {habits.map(habit => (
          <HabitDashCard
            key={habit.id}
            habit={habit}
            isLoaded={isLoaded}
          /> ))}
      </div>

    </div>
  )
}

export default HabitDash
