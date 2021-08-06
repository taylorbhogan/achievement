import HabitCube from '../../HabitCube'
import styles from './ReflectionBucketWeek.module.css'

const ReflectionBucketWeek = ({habit}) => {
  // console.log('reflection---->',reflection);
  const trueFalses = Object.values(habit.week)

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

export default ReflectionBucketWeek
