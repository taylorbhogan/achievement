import { useDispatch } from "react-redux"

import EditHabitButton from "../EditHabitButton"
import DeleteButton from "../parts/DeleteButton"
import LoadingContent from "../LoadingContent"

import { deleteHabit } from "../../store/habit"

import styles from './HabitDashCard.module.css'

const HabitDashCard = ({habit, isLoaded}) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteHabit(habit.id))
  }

  if (!isLoaded){
    return <LoadingContent />
  }

  return (
    <div className={styles.container}>
      <div> hello from HabitDashCard</div>
      <div>{habit.name}</div>
      <EditHabitButton habit={habit}/>
      <DeleteButton handleDelete={handleDelete}/>
    </div>
  )
}

export default HabitDashCard
