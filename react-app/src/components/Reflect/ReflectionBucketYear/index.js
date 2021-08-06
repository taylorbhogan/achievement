import HabitCube from '../../HabitCube'
import styles from './ReflectionBucketYear.module.css'

const ReflectionBucketYear = ({reflection, habitName}) => {
  // console.log('reflection---->',reflection);
  const trueFalses = Object.values(reflection)

  return (
    <div className={styles.container}>
      {habitName}
      <div className={styles.mapBucket}>
        {trueFalses.map((wasAccomplished, idx) => (
          <HabitCube
            wasAccomplished={wasAccomplished}
            color={reflection[2]}
            key={idx}
            />
        ))}

      </div>
    </div>
  )
}

export default ReflectionBucketYear
