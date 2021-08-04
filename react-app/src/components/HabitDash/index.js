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



  const getToday = (daysAgo) => {
    const date = new Date()
    const thatDay = new Intl.DateTimeFormat('en-US', { weekday: 'short', day: 'numeric' }).format(date - (daysAgo * 86400000))
    const thisDay = thatDay.slice(0, -1).toLocaleLowerCase()
    return `${thisDay.slice(-2)} ${thisDay.slice(0,-2)}`
  }

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
        <div className={styles.cubeContainerHeadersWrapper}>
          <div className={styles.name}></div>
          <div className={styles.cubeContainerHeadersCopyCubeContainer}>
            <div className={styles.cubeContainerHeader}>{getToday(6)}</div>
            <div className={styles.cubeContainerHeader}>{getToday(5)}</div>
            <div className={styles.cubeContainerHeader}>{getToday(4)}</div>
            <div className={styles.cubeContainerHeader}>{getToday(3)}</div>
            <div className={styles.cubeContainerHeader}>{getToday(2)}</div>
            <div className={styles.cubeContainerHeader}>{getToday(1)}</div>
            <div className={styles.cubeContainerHeader}>{getToday(0)}</div>
          </div>
          <div className={styles.target}></div>
        </div>
        {/* {habits.filter(habit => habit.name !== 'DELETED').map((habit, idx) => ( */}
        {habits.map((habit, idx) => (
          <HabitDashCard
            key={idx}
            habit={habit}
            isLoaded={isLoaded}
          /> ))}
      </div>
    </div>
  )
}

export default HabitDash
