import { useDispatch } from "react-redux"

import EditHabitButton from "../EditHabitButton"
import DeleteButton from "../parts/DeleteButton"
import LoadingContent from "../LoadingContent"

import { deleteHabit } from "../../store/habit"

const HabitDashCard = ({habit, isLoaded}) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteHabit(habit.id))
  }

  if (!isLoaded){
    return <LoadingContent />
  }

  return (
    <div>
      <div> hello from HabitDashCard</div>
      <div>{habit.name}</div>
      <EditHabitButton habit={habit}/>
      <DeleteButton handleDelete={handleDelete}/>
    </div>
  )
}

export default HabitDashCard
