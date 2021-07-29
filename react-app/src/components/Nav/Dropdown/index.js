import LogoutButton from '../../auth/LogoutButton'
import styles from './Dropdown.module.css'

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <LogoutButton />
    </div>
  )
}

export default Dropdown
