import CreateHabitButton from '../CreateHabitButton'
import { NavLink } from 'react-router-dom'
import styles from './HabitDashMenu.module.css'

const HabitDashMenu = () => {
  return (
    <div className={styles.container}>
      <CreateHabitButton componentStyle={'gray'}/>
      <NavLink to='/habits' exact={true} activeClassName={styles.active} className={styles.navLink}>
        <div className={styles.linkDiv}>Edit Habits</div>
      </NavLink>
     <NavLink to='/achievements' exact={true} activeClassName={styles.active} className={styles.navLink}>
        <div className={styles.linkDiv}>Edit Achievements</div>
      </NavLink>
    </div>
  )
}

export default HabitDashMenu
