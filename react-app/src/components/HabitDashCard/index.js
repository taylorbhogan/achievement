const HabitDashCard = ({habit, isLoaded}) => {

  if (!isLoaded){
    return null
  }

  return (
    <div>
      <div> hello from HabitDashCard</div>
      <div>{habit.name}</div>
    </div>
  )
}

export default HabitDashCard
