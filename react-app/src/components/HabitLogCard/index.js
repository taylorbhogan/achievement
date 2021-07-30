import { useState } from "react"
import { useDispatch } from "react-redux"

// perhaps I'll move these back here and render them if the user toggles on edit mode
// import EditHabitButton from "../EditHabitButton"
// import DeleteButton from "../parts/DeleteButton"
import LoadingContent from "../LoadingContent"
import HabitCube from "../HabitCube"
import CreateAchievementButton from "../CreateAchievementButton"
import HabitLogCardDetails from "../HabitLogCardDetails"

import { deleteHabit } from "../../store/habit"

import styles from './HabitLogCard.module.css'

const HabitLogCard = ({ habit, isLoaded }) => {
  const dispatch = useDispatch()


  const handleDelete = () => {
    dispatch(deleteHabit(habit.id))
  }

  if (!isLoaded){
    return <LoadingContent />
  }

  return (
    <div
      className={styles.container}
      id={habit.id}
      >
      <div className={styles.bar}>
        <div>{habit.name}</div>
        <div className={styles.cubeContainer}>
          <HabitCube />
          <HabitCube />
          <HabitCube />
          <HabitCube />
          <HabitCube />
          <HabitCube />
          <CreateAchievementButton />
        </div>
      </div>
      <HabitLogCardDetails handleDelete={handleDelete} habit={habit} />
    </div>
  )
}

export default HabitLogCard
