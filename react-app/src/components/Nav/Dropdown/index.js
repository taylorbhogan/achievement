import { NavLink } from 'react-router-dom'

import LogoutButton from '../../parts/LogoutButton'
import styles from './Dropdown.module.css'

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <NavLink to='/achievements' exact={true} activeClassName={styles.active} className={styles.navLink}>
        <div className={styles.linkDiv}>Achievement Log</div>
      </NavLink>
      <NavLink to='/habits' exact={true} activeClassName={styles.active} className={styles.navLink}>
        <div className={styles.linkDiv}>Habit Log</div>
      </NavLink>
      <LogoutButton />
    </div>
  )
}

export default Dropdown
