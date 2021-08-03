import styles from './HabitCube.module.css'

const HabitCube = ({ wasAccomplished }) => {
  return (
    <>
      {wasAccomplished && <div className={styles.habitCube}></div>}
      {!wasAccomplished && <div className={styles.habitCubeInactive}></div>}
    </>
  )
}

export default HabitCube
