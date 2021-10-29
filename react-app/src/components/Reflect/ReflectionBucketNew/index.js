import HabitCube from '../../HabitCube'
import styles from './ReflectionBucketNew.module.css'

const ReflectionBucketNew = ({ habit, achievementMap }) => {

  return (
    <div className={styles.container}>
      {habit?.name ? habit.name : 'hey'}
      <div className={styles.mapBucket}>
        {Object.values(achievementMap).map((wasAccomplished, idx) => (
          <HabitCube
            wasAccomplished={wasAccomplished}
            color={habit?.color}
            key={idx}
          />
        ))}
      </div>
    </div>
  )
}

export default ReflectionBucketNew
