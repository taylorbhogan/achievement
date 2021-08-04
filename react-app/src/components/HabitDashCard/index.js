import { useState } from "react"
// import { useDispatch } from "react-redux"

import LoadingContent from "../LoadingContent"
import HabitCube from "../HabitCube"
import CreateAchievementButton from "../CreateAchievementButton"
// import HabitDashCardDetails from "../HabitDashCardDetails"

// import { deleteHabit } from "../../store/habit"

import styles from './HabitDashCard.module.css'

const HabitDashCard = ({ habit, isLoaded }) => {
  // const [ isShown, setIsShown ] = useState(false)
  const [ errors, setErrors ] = useState([])
  // const dispatch = useDispatch()

  // console.log(habit.name,'--------',habit.saturday);
  // console.log(habit.name,'--------',habit.friday);
  // console.log(habit.name,'--------',habit.thursday);
  // console.log(habit.name,'--------',habit.wedneday);
  // console.log(habit.name,'--------',habit.tuesday);
  // console.log(habit.name,'--------',habit.monday);
  // console.log(habit.name,'--------',habit.sunday);
  // const handleDelete = () => {
  //   dispatch(deleteHabit(habit.id))
  // }

  if (!isLoaded){
    return <LoadingContent />
  }

  return (
    <div
      className={styles.container}
      id={habit.id}
      // onMouseEnter={() => setIsShown(true)}
      // onMouseLeave={() => setIsShown(false)}
      >
      <div className={styles.bar}>
        <div className={styles.name}>{habit.name}</div>
        <div className={styles.cubeContainer}>
          <HabitCube wasAccomplished={habit.sunday}/>
          <HabitCube wasAccomplished={habit.monday}/>
          <HabitCube wasAccomplished={habit.tuesday}/>
          <HabitCube wasAccomplished={habit.wednesday}/>
          <HabitCube wasAccomplished={habit.thursday}/>
          <HabitCube wasAccomplished={habit.friday}/>
          <CreateAchievementButton habit={habit} setErrors={setErrors}/>
        </div>
        <div className={styles.target}>
          /{habit.target}
        </div>
      </div>
      {/* {isShown && <HabitDashCardDetails handleDelete={handleDelete} habit={habit} /> } */}
    </div>
  )
}

export default HabitDashCard
