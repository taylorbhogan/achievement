import { useState } from "react"
import { useDispatch } from "react-redux"

// perhaps I'll move these back here and render them if the user toggles on edit mode
// import EditHabitButton from "../EditHabitButton"
// import DeleteButton from "../parts/DeleteButton"
import LoadingContent from "../LoadingContent"
import HabitDashCardDetails from "../HabitDashCardDetails"

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
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      >
      <div>
        <div>{habit.name}</div>
        <div className={styles.cubeContainer}>
          
        </div>
      </div>
      {/* <EditHabitButton habit={habit}/>
      <DeleteButton handleDelete={handleDelete}/> */}
      {isShown && <HabitDashCardDetails handleDelete={handleDelete} habit={habit} /> }
    </div>
  )
}

export default HabitDashCard
