import { useState } from "react";
import { useDispatch } from "react-redux"
import { createAchievement } from "../../store/achievement"
import { getHabit } from "../../store/habit"
import useSound from 'use-sound';
import clickSfx from '../../sounds/click.mp3';

import styles from './CreateAchievementButton.module.css'

const CreateAchievementButton = ({ habit, setErrors, wasAccomplished, id }) => {
  const [triggered, setTriggered] = useState(false)
  const dispatch = useDispatch()

  const [playClick] = useSound(clickSfx)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTriggered(true)

    setTimeout(() => {
      setTriggered(false)
    }, 520);

    playClick()
    let createdAt = new Date()
    if (id === 5) {
      createdAt.setDate(createdAt.getDate() - 1)
    } else if (id === 4) {
      createdAt.setDate(createdAt.getDate() - 2)
    } else if (id === 3) {
      createdAt.setDate(createdAt.getDate() - 3)
    } else if (id === 2) {
      createdAt.setDate(createdAt.getDate() - 4)
    } else if (id === 1) {
      createdAt.setDate(createdAt.getDate() - 5)
    } else if (id === 0) {
      createdAt.setDate(createdAt.getDate() - 6)
    }

    const achievement = {
      habit_id: habit.id,
      is_stellar: false,
      created_at: createdAt,
    }
    const dbAchievement = await dispatch(createAchievement(achievement))
    if (dbAchievement.errors) {
      setErrors(dbAchievement.errors)
    } else {
      dispatch(getHabit(habit.id))
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.cubeWrapper}>
      <button
        className={styles.button}
        style={
          wasAccomplished ?
          {backgroundColor: `hsl(${habit.color}, 100%, 50%)`} :
          {backgroundColor: 'gray'}
        }
      ></button>
      <div
        style={triggered ? {transform: 'scale(1)'} : null}
        className={styles.circle}></div>
    </form>
  )
}

export default CreateAchievementButton
