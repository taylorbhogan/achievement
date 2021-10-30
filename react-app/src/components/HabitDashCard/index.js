import { useState } from "react"
import AchievementCreateButton from "../AchievementCreateButton"
import FormErrors from "../parts/FormErrors"
import styles from './HabitDashCard.module.css'

const HabitDashCard = ({ habit }) => {
  const [errors, setErrors] = useState([])

  const nameStyle = {
    color: `hsl(${habit.color}, 100%, 50%)`,
  }

  return (
    <>
      <div className={styles.bar}>
        <div
          style={habit.target_prog >= habit.target ? nameStyle : null}
          className={styles.name}
        >{habit.name}</div>
        <div className={styles.cubeContainer}>
          <AchievementCreateButton
            habit={habit}
            setErrors={setErrors}
            id={0}
            wasAccomplished={habit.week['0']}
          />
          <AchievementCreateButton
            habit={habit}
            setErrors={setErrors}
            id={1}
            wasAccomplished={habit.week['1']}
          />
          <AchievementCreateButton
            habit={habit}
            setErrors={setErrors}
            id={2}
            wasAccomplished={habit.week['2']}
          />
          <AchievementCreateButton
            habit={habit}
            setErrors={setErrors}
            id={3}
            wasAccomplished={habit.week['3']}
          />
          <AchievementCreateButton
            habit={habit}
            setErrors={setErrors}
            id={4}
            wasAccomplished={habit.week['4']}
          />
          <AchievementCreateButton
            habit={habit}
            setErrors={setErrors}
            id={5}
            wasAccomplished={habit.week['5']}
          />
          <AchievementCreateButton
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
    </>
  )
}

export default HabitDashCard
