import HabitDashWelcome from "../HabitDashWelcome"
import HabitDashCard from "../HabitDashCard"
import ButtonNewHabit from "../ButtonNewHabit"

function HabitDash() {
  

  return (
    <div>
      <HabitDashWelcome />
      <div>
        <ButtonNewHabit />
      </div>
      <div>
        <HabitDashCard />
      </div>
    </div>
  )
}

export default HabitDash
