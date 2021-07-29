import { useEffect, useState } from 'react'
import { FaCog } from 'react-icons/fa'

import Dropdown from '../Dropdown'
import styles from './DropdownOpenButton.module.css'

const DropdownOpenButton = () => {
  const [ showMenu, setShowMenu ] = useState(false)

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true)
  }

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false)
    }
    document.addEventListener('click',closeMenu)

    return () => document.removeEventListener('click',closeMenu)
  }, [showMenu])

  return (
    <>
      <button
        className={styles.openButton}
        onClick={openMenu}
      ><FaCog /></button>
      {showMenu &&
      <Dropdown />}
    </>
  )
}

export default DropdownOpenButton
