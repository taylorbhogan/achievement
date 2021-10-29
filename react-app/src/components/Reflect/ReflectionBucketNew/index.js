import HabitCube from '../../HabitCube'
import styles from './ReflectionBucketNew.module.css'

const ReflectionBucketNew = ({ habit, iterable }) => {
  const trueFalses = Object.values(iterable)

  return (
    <div className={styles.container}>
      {habit.name}
      <div className={styles.mapBucket}>
        {trueFalses.map((wasAccomplished, idx) => (
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

export default ReflectionBucketNew
