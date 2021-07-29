import { useState } from "react"
import { useDispatch } from "react-redux"

import EditHabitButton from "../EditHabitButton"
import DeleteButton from "../parts/DeleteButton"
import LoadingContent from "../LoadingContent"

import { deleteHabit } from "../../store/habit"

import styles from './HabitDashCard.module.css'

const HabitDashCard = ({ habit, isLoaded }) => {
  const [ isShown, setIsShown ] = useState(false)
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
      onClick={(e) => console.log(e.target.id)}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      >
      <div> hello from HabitDashCard</div>
      <div>{habit.name}</div>
      <EditHabitButton habit={habit}/>
      <DeleteButton handleDelete={handleDelete}/>
      {isShown && <div>hello</div> }
    </div>
  )
}

export default HabitDashCard
