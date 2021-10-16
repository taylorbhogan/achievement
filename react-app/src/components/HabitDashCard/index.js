import { useState } from "react"
import CreateAchievementButton from "../CreateAchievementButton"
import FormErrors from "../parts/FormErrors"
import styles from './HabitDashCard.module.css'

const HabitDashCard = ({ habit }) => {
  const [errors, setErrors] = useState([])

  const nameStyle = {
      color: `hsl(${habit.color}, 100%, 50%)`,
    }

  return (
    <div
      className={styles.container}
      id={habit.id}
    >
      <div className={styles.bar}>
        <div style={habit.target_prog >= habit.target ? nameStyle : null} className={styles.name}>{habit.name}</div>
        <div className={styles.cubeContainer}>
          <CreateAchievementButton
            habit={habit}
            setErrors={setErrors}
            id={0}
            wasAccomplished={habit.week['0']}
          />
          <CreateAchievementButton
            habit={habit}
            setErrors={setErrors}
            id={1}
            wasAccomplished={habit.week['1']}
          />
          <CreateAchievementButton
            habit={habit}
            setErrors={setErrors}
            id={2}
            wasAccomplished={habit.week['2']}
          />
          <CreateAchievementButton
            habit={habit}
            setErrors={setErrors}
            id={3}
            wasAccomplished={habit.week['3']}
          />
          <CreateAchievementButton
            habit={habit}
            setErrors={setErrors}
            id={4}
            wasAccomplished={habit.week['4']}
          />
          <CreateAchievementButton
            habit={habit}
            setErrors={setErrors}
            id={5}
            wasAccomplished={habit.week['5']}
          />
          <CreateAchievementButton
            habit={habit}
            setErrors={setErrors}
            id={6}
            wasAccomplished={habit.week['6']}
          />
        </div>
        <div style={nameStyle} className={styles.target}>
          {habit.target_prog}/{habit.target}
        </div>
      </div>
      <FormErrors errors={errors} />
    </div>
  )
}

export default HabitDashCard
