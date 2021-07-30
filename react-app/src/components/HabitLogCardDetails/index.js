import EditHabitButton from '../EditHabitButton'
import DeleteButton from '../parts/DeleteButton'
import styles from './HabitLogCardDetails.module.css'


const HabitLogCardDetails = ({ habit, handleDelete, setIsEditable }) => {
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
          {/* <button onClick={() => setIsEditable(true)}></button> */}
          <EditHabitButton habit={habit} setIsEditable={setIsEditable}/>
          <DeleteButton handleDelete={handleDelete}/>
        </div>
      </div>
    </div>
  )
}

export default HabitLogCardDetails
