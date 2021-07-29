import { useSelector } from 'react-redux'

import styles from './HabitDashWelcome.module.css'

const HabitDashWelcome = () => {

  const user = useSelector(state => state.session.user)

  return (
    <div className={styles.container}>
      <div>Hello, {user.first_name}.</div>
      <div>What will you achieve today?</div>
      <div></div>
    </div>
  )
}

export default HabitDashWelcome
