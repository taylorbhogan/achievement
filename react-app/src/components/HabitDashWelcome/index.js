import { useSelector } from 'react-redux'

import styles from './HabitDashWelcome.module.css'

const HabitDashWelcome = () => {

  const user = useSelector(state => state.session.user)
  const date = new Date()
  // const todaysDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date)
  const todaysDate = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' }).format(date)
  const thisYear = new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(date)
  const currentHour = date.getHours()

  let greeting;
  if (currentHour > 0 && currentHour < 4) {
    greeting = (
      <div className={styles.greeting}>
        <div>`Hello, ${user.first_name}. It's the middle of the night.`</div>
        <div>Can you give yourself the gift of sleep?</div>
      </div>
      )
    } else if (currentHour > 4 && currentHour < 12) {
      greeting = (
        <div className={styles.greeting}>
          <div>Good morning, {user.first_name}. Today is {todaysDate} in the year {thisYear}.</div>
          <div>What will you achieve today?</div>
      </div>
      )
  } else if (currentHour > 12 && currentHour < 17) {
    greeting = (
        <div className={styles.greeting}>
          <div>Good afternoon, {user.first_name}. Today is {todaysDate} in the year {thisYear}.</div>
          <div>What will you achieve today?</div>
      </div>
      )
  } else if (currentHour > 17 && currentHour < 21) {
    greeting = (
        <div className={styles.greeting}>
          <div>Good evening, {user.first_name}. Today is {todaysDate} in the year {thisYear}.</div>
          <div>What have you achieved today?</div>
      </div>
      )
  } else if (currentHour > 21 && currentHour < 24) {
    greeting = (
        <div className={styles.greeting}>
          <div>Hello, {user.first_name}. It's the evening of {todaysDate} in the year {thisYear}.</div>
          <div>What did you achieve today?</div>
      </div>
      )
  }


  return (
    <div className={styles.container}>
      <div>{greeting}</div>
    </div>
  )
}

export default HabitDashWelcome
