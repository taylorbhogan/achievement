import HabitCube from '../../HabitCube'
import styles from './ReflectionBucket.module.css'

const ReflectionBucket = ({ habit, achievementMap }) => {

  return (
    <div className={styles.container}>
      {habit.name}
      <div className={styles.mapBucket}>
        {Object.values(achievementMap).map((wasAccomplished, idx) => (
          <HabitCube
            wasAccomplished={wasAccomplished}
            color={habit.color}
            key={idx}
          />
        ))}
      </div>
    </div>
  )
}

export default ReflectionBucket
