import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { FaEllipsisV } from 'react-icons/fa'
import { IconContext } from "react-icons";
import { getHabits } from "../../store/habit"
import HabitDashWelcome from "../HabitDashWelcome"
import HabitDashMenu from "../HabitDashMenu";
import HabitDashCard from "../HabitDashCard"
// import CreateHabitButton from "../CreateHabitButton"
import LoadingContent from "../LoadingContent"
import NoHabits from "../parts/NoHabits";
import styles from './HabitDash.module.css'

function HabitDash() {
  const dispatch = useDispatch()

  const reduxHabits = useSelector(state => state.habits.habits)
  const user = useSelector(state => state.session.user)

  const [ habits, setHabits ] = useState([])
  const [ isLoaded, setIsLoaded ] = useState(false)
  const [ showMenu, setShowMenu ] = useState(false)

  useEffect(() => {
    dispatch(getHabits(user.id))
  }, [dispatch, user.id])

  useEffect(() => {
    if (Object.keys(reduxHabits).length > 0) {
      setIsLoaded(true)
      setHabits(Object.values(reduxHabits))
    }
  }, [reduxHabits])


  // useEffect(() => {
  //   if (!user.id) {
  //     return;
  //   }
  //   (async () => {
  //     const response = await fetch(`/api/achievements/users/${user.id}/targets`);
  //     const targetNums = await response.json();
  //     setTargetNumerators(targetNums);

  //   })();
  // }, [user.id]);

  const getToday = (daysAgo) => {
    const date = new Date()
    const thatDay = new Intl.DateTimeFormat('en-US', { weekday: 'short', day: 'numeric' }).format(date - (daysAgo * 86400000))
    const thisDay = thatDay.slice(0, -1).toLocaleLowerCase()
    return `${thisDay.slice(-2)} ${thisDay.slice(0,-2)}`
  }

  const openMenu = () => {
    setShowMenu(!showMenu)
  }

  // useEffect(() => {
  //   if (!showMenu) return;
  //   const closeMenu = () => {

  //     setShowMenu(false)
  //   }
  //   document.addEventListener('click',closeMenu)


  //   return () => document.removeEventListener('click',closeMenu)
  // }, [showMenu])

  // if (!isLoaded){
  //   return <LoadingContent />
  // }

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
      {/* <div className={styles.makeMeRight}>
        <CreateHabitButton />
      </div> */}
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
        {habits.length === 0 &&
          <NoHabits />
        }
        {habits.filter(habit => habit.name !== 'DELETED').map((habit, idx) => (
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
