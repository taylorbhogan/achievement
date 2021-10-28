import { Link } from 'react-router-dom'
import styles from './NoAchievements.module.css'

const NoAchievements = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Add your first achievement</div>
      <Link className={styles.link} to='/' >Let's Go</Link>
    </div>
  )
}

export default NoAchievements
