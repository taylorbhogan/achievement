import { useState } from "react"
import CreateHabitButton from '../CreateHabitButton'
import { NavLink } from 'react-router-dom'
import { FaEllipsisV } from 'react-icons/fa'
import { IconContext } from "react-icons";


import styles from './HabitDashMenu.module.css'

const HabitDashMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const openMenu = () => {
    setShowMenu(!showMenu)
  }


  return (
    <div className={styles.menu}>
    <button
      onClick={openMenu}
      className={styles.menuButton}>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <FaEllipsisV size={16} color={'#FFF'} />
      </IconContext.Provider>
    </button>
    {(showMenu &&
          <div className={styles.container}>
          <CreateHabitButton componentStyle={'gray'}/>
          <NavLink to='/habits' exact={true} activeClassName={styles.active} className={styles.navLink}>
            <div className={styles.linkDiv}>Edit Habits</div>
          </NavLink>
         <NavLink to='/achievements' exact={true} activeClassName={styles.active} className={styles.navLink}>
            <div className={styles.linkDiv}>Edit Achievements</div>
          </NavLink>
        </div>
      )}
  </div>
  )
}

export default HabitDashMenu
