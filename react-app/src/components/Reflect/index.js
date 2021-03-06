import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHabits, unloadHabits } from '../../store/habit'
import ReflectionBucket from '../ReflectionBucket'
import NoHabits from '../parts/NoHabits'
import LoadingContent from '../parts/LoadingContent'

import styles from './Reflect.module.css'

const Reflect = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [timeframe, setTimeframe] = useState('all')
  const dispatch = useDispatch()

  const user = useSelector(state => state.session.user)
  const allHabits = useSelector(state => Object.values(state.habits.habits))
  const habits = allHabits.filter(habit => habit.name !== 'DELETED')

  useEffect(() => {
    const fetchHabits = async () => {
      await dispatch(getHabits(user.id))
      setIsLoaded(true)
    }
    fetchHabits()
    return () => {
      dispatch(unloadHabits())
    }
  }, [dispatch, user.id])

  return (
    isLoaded ? (
      habits.length > 0 ? (
        <div className={styles.container}>
          <div className={styles.greeting}>How green is your garden?</div>
          <form>
            <select
              onChange={(e) => setTimeframe(e.target.value)}
              className={styles.select}
            >
              <option value='all'>view your progress since you added each habit</option>
              <option value='week'>view your progress in the last week</option>
              <option value='year'>view your progress in the last year</option>
            </select>
          </form>
          {timeframe === 'all' &&
            habits.map((habit, idx) => (
              <ReflectionBucket
                key={idx}
                achievementMap={habit.birth}
                habit={habit}
              />
            ))
          }
          {timeframe === 'year' &&
            habits.map((habit, idx) => (
              <ReflectionBucket
                key={idx}
                achievementMap={habit.year}
                habit={habit}
              />
            ))
          }
          {timeframe === 'week' &&
            habits.map((habit, idx) => (
              <ReflectionBucket
                key={idx}
                achievementMap={habit.week}
                habit={habit}
              />
            ))
          }
        </div>
      ) : (
        <NoHabits />
      )
    ) : (
      <LoadingContent />
    )
  )
}

export default Reflect
