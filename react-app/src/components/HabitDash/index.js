import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getHabits } from "../../store/habit"
import HabitDashWelcome from "../HabitDashWelcome"
import HabitDashCard from "../HabitDashCard"
import CreateHabitButton from "../CreateHabitButton"

function HabitDash() {
  const dispatch = useDispatch()

  const reduxHabits = useSelector(state => state.habits.habits)
  const user = useSelector(state => state.session.user)

  const [ habits, setHabits ] = useState([])
  const [ isLoaded, setIsLoaded ] = useState(false)

  useEffect(() => {
    dispatch(getHabits(user.id))
  }, [dispatch, user.id])

  useEffect(() => {
    console.log('Object.keys(reduxHabits)----',Object.keys(reduxHabits));
    if (Object.keys(reduxHabits).length > 0) {
      setIsLoaded(true)
      setHabits(Object.values(reduxHabits))
    }
  }, [reduxHabits])


  if (!isLoaded){
    return null
  }

  return (
    <div>
      <HabitDashWelcome />
      <div>
        <CreateHabitButton />
      </div>
      <div>
        {habits && habits.map(habit => (
          <HabitDashCard
            key={habit.id}
            habit={habit}
            isLoaded={isLoaded}
          /> ))}
      </div>

    </div>
  )
}

export default HabitDash
