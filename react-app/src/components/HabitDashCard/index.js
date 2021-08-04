import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"

// import { getWeeksReflections } from "../../store/reflect"
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
  // const user = useSelector(state => state.session.user)

  // useEffect(() => {
  //   dispatch(getWeeksReflections(user.id))
  // }, [dispatch, user.id])

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
  // console.log('habit.week-------------------->',habit.name,habit.week);

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
          {/* <HabitCube color={habit.color} wasAccomplished={habit.week['0']}/>
          <HabitCube color={habit.color} wasAccomplished={habit.week['1']}/>
          <HabitCube color={habit.color} wasAccomplished={habit.week['2']}/>
          <HabitCube color={habit.color} wasAccomplished={habit.week['3']}/>
          <HabitCube color={habit.color} wasAccomplished={habit.week['4']}/>
          <HabitCube color={habit.color} wasAccomplished={habit.week['5']}/> */}
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
        <div className={styles.target}>
        {habit.target_prog}/{habit.target}
        </div>
      </div>
      {/* {isShown && <HabitDashCardDetails handleDelete={handleDelete} habit={habit} /> } */}
    </div>
  )
}

export default HabitDashCard
