import EditHabitButton from '../EditHabitButton'
import DeleteButton from '../parts/DeleteButton'
import styles from './HabitDashCardDetails.module.css'


const HabitDashCardDetails = ({ habit, handleDelete }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>Your goal:</div>
        <div>{habit.blurb}</div>
      </div>
      <div className={styles.center}>
        <div>Stellar Achievement:</div>
        <div>{habit.stellar_blurb}</div>
        <button>I earned this</button>
      </div>
      <div>
        <EditHabitButton habit={habit}/>
        <DeleteButton handleDelete={handleDelete}/>
      </div>
    </div>
  )
}

export default HabitDashCardDetails
