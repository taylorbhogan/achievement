// import styles from './HabitCube.module.css'

const HabitCube = ({ wasAccomplished, color }) => {
  const jsStylesActive = {
    width: 'var(--dashCubeDimension)',
    height: 'var(--dashCubeDimension)',
    borderRadius: 'var(--dashCubeBorderRadius)',
    backgroundColor: `hsl(${color}, 100%, 50%)`,
    margin: '5px',
  }
  const jsStylesInactive = {
    width: 'var(--dashCubeDimension)',
    height: 'var(--dashCubeDimension)',
    borderRadius: 'var(--dashCubeBorderRadius)',
    backgroundColor: 'gray',
    margin: '5px',
    // cursor: 'pointer',
  }

  return (
    <>
      <div style={wasAccomplished ? jsStylesActive : jsStylesInactive}></div>
      {/* {wasAccomplished && <div className={styles.habitCube}></div>}
      {!wasAccomplished && <div className={styles.habitCubeInactive}></div>} */}
    </>
  )
}

export default HabitCube
