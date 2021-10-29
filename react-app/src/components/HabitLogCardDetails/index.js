import styles from './HabitLogCardDetails.module.css'

const HabitLogCardDetails = ({ habit }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <div className={styles.left}>
            <div className={styles.header}>Achievement:</div>
            <div className={styles.contents}>{habit.blurb}</div>
          </div>
          <div className={styles.center}>
            <div className={styles.header}>Stellar Achievement:</div>
            <div className={styles.contents}>{habit.stellar_blurb}</div>
          </div>
          <div className={styles.right}>
            <div className={styles.header}>Weekly Target:</div>
            <div className={styles.contents}>{habit.target}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HabitLogCardDetails
