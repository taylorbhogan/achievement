import EditHabitButton from '../EditButton'
import DeleteButton from '../parts/DeleteButton'
import styles from './HabitLogCardDetails.module.css'


const HabitLogCardDetails = ({ habit, handleDelete }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div>Achievement:</div>
          <div>{habit.blurb}</div>
        </div>
        <div className={styles.center}>
          <div>Stellar Achievement:</div>
          <div>{habit.stellar_blurb}</div>
        </div>
        <div className={styles.right}>
          <div>Weekly Target</div>
          <div>{habit.target}</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.buttonContainer}>
          <EditHabitButton habit={habit}/>
          <DeleteButton handleDelete={handleDelete}/>
        </div>
      </div>
    </div>
  )
}

export default HabitLogCardDetails