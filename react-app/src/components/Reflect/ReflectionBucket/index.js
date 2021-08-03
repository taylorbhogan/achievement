import HabitCube from '../../HabitCube'
import styles from './ReflectionBucket.module.css'

const ReflectionBucket = ({reflection, habitName}) => {
  console.log('reflection---->',reflection);
  const trueFalses = Object.values(reflection)

  return (
    <div className={styles.container}>
      {habitName}
      <div className={styles.mapBucket}>
        {trueFalses.map(wasAccomplished => (
          <HabitCube wasAccomplished={wasAccomplished} />
        ))}

      </div>
    </div>
  )
}

export default ReflectionBucket
