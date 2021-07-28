import EditHabitButton from "../EditHabitButton"

const HabitDashCard = ({habit, isLoaded}) => {

  if (!isLoaded){
    return null
  }

  return (
    <div>
      <div> hello from HabitDashCard</div>
      <div>{habit.name}</div>
      <EditHabitButton habit={habit}/>
    </div>
  )
}

export default HabitDashCard
