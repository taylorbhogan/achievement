import CreateHabitButton from '../../CreateHabitButton'
import styles from './NoAchievements.module.css'

const NoAchievements = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Add your first achievement</div>
      <CreateHabitButton componentStyle={'green'}/>
    </div>

  )
}

export default NoAchievements
