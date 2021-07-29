import { NavLink } from 'react-router-dom'

import LogoutButton from '../../auth/LogoutButton'
import styles from './Dropdown.module.css'

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <NavLink to='/achievements' exact={true} activeClassName='active'>
        <div>Achievement Log</div>
      </NavLink>
      <LogoutButton />
    </div>
  )
}

export default Dropdown
