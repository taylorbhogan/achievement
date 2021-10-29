import { useEffect, useRef, useState } from "react"
import CreateHabitButton from '../CreateHabitButton'
import { NavLink } from 'react-router-dom'
import { FaEllipsisV } from 'react-icons/fa'
import { IconContext } from "react-icons";


import styles from './HabitDashMenu.module.css'

const HabitDashMenu = () => {
  const menuRef = useRef()
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    const handler = e => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])

  return (
    <div ref={menuRef} className={styles.menu}>
      <button
        onClick={toggleMenu}
        className={styles.menuButton}>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <FaEllipsisV size={16} color={'#FFF'} />
        </IconContext.Provider>
      </button>
      <div
        style={showMenu ? { transform: 'scale(1)' } : { transform: 'scale(0)' }}
        className={styles.container}>
        <CreateHabitButton componentStyle={'gray'} toggleMenu={toggleMenu} />
        <NavLink to='/habits' exact={true} activeClassName={styles.active} className={styles.navLink}>
          <div className={styles.linkDiv}>Edit Habits</div>
        </NavLink>
        <NavLink to='/achievements' exact={true} activeClassName={styles.active} className={styles.navLink}>
          <div className={styles.linkDiv}>Edit Achievements</div>
        </NavLink>
      </div>
    </div>
  )
}

export default HabitDashMenu
