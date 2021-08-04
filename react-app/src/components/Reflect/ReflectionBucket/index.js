import HabitCube from '../../HabitCube'
import styles from './ReflectionBucket.module.css'

const ReflectionBucket = ({reflection, habitName}) => {
  console.log('reflection---->',reflection);
  const trueFalses = Object.values(reflection[0])

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

export default ReflectionBucket
