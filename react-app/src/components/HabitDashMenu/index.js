import CreateHabitButton from '../CreateHabitButton'
import { NavLink } from 'react-router-dom'
import styles from './HabitDashMenu.module.css'

const HabitDashMenu = () => {
  return (
    <div className={styles.container}>
      <CreateHabitButton componentStyle={'gray'}/>
     <NavLink to='/achievements' exact={true} activeClassName={styles.active} className={styles.navLink}>
        <div className={styles.linkDiv}>Achievement Log</div>
      </NavLink>
      <NavLink to='/habits' exact={true} activeClassName={styles.active} className={styles.navLink}>
        <div className={styles.linkDiv}>Habit Log</div>
      </NavLink>
    </div>
  )
}

export default HabitDashMenu
