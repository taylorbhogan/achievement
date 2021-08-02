import styles from './HabitCube.module.css'

const HabitCube = ({ isActive }) => {
  return (
    <>
      {isActive && <div className={styles.habitCube}></div>}
      {!isActive && <div className={styles.habitCubeInactive}></div>}
    </>
  )
}

export default HabitCube
