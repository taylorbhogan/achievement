import CreateHabitButton from '../../CreateHabitButton'
import styles from './NoHabits.module.css'

const NoHabits = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Are you ready to build accountability?</div>
      <CreateHabitButton componentStyle={'green'}/>
    </div>

  )
}

export default NoHabits
