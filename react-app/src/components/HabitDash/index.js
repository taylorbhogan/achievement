import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { FaEllipsisV } from 'react-icons/fa'
import { IconContext } from "react-icons";
import { getHabits, unloadHabits } from "../../store/habit"
import HabitDashWelcome from "../HabitDashWelcome"
import HabitDashMenu from "../HabitDashMenu";
import HabitDashCard from "../HabitDashCard"
import LoadingContent from "../parts/LoadingContent";
import styles from './HabitDash.module.css'

function HabitDash() {
  const dispatch = useDispatch()

  const reduxHabits = useSelector(state => Object.values(state.habits.habits))
  const user = useSelector(state => state.session.user)
  const userId = user.id

  const [ showMenu, setShowMenu ] = useState(false)

  useEffect(() => {
    dispatch(getHabits(userId))
    return () => {

      dispatch(unloadHabits())
    }
  }, [dispatch, userId])

  const getToday = (daysAgo) => {
    const date = new Date()
    const thatDay = new Intl.DateTimeFormat('en-US', { weekday: 'short', day: 'numeric' }).format(date - (daysAgo * 86400000))
    const thisDay = thatDay.slice(0, -1).toLocaleLowerCase()
    return `${thisDay.slice(-2)} ${thisDay.slice(0,-2)}`
  }

  const openMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className={styles.container}>
      <HabitDashWelcome />
      <div className={styles.menu}>
        <button
          onClick={openMenu}
          className={styles.menuButton}>
          <IconContext.Provider value={{ className: "react-icons" }}>
            <FaEllipsisV size={16} color={'#FFF'}/>
          </IconContext.Provider>
        </button>
        {showMenu && <HabitDashMenu />}
      </div>
      <div className={styles.divider}></div>

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
        {reduxHabits.length === 0 && <LoadingContent />}
        {reduxHabits.filter(habit => habit.name !== 'DELETED').map((habit, idx) => (
          <HabitDashCard
            key={idx}
            habit={habit}
          />))}
      </div>
    </div>
  )
}

export default HabitDash
