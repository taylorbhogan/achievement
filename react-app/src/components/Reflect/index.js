import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReflections, getWeeksReflections, unloadReflections } from '../../store/reflect'
import { getHabits, unloadHabits } from '../../store/habit'
import ReflectionBucket from './ReflectionBucket'
import ReflectionBucketNew from './ReflectionBucketNew'
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

  const yearArray = [];
  habits.forEach(habit => {
    yearArray.push(habit.year)
  })

  const reduxReflections = useSelector(state => Object.values(state.reflections.reflections))
  const reduxReflectionKeys = useSelector(state => Object.keys(state.reflections.reflections))


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (timeframe === 'all') {
      dispatch(getReflections(user.id))
    }
  }

  useEffect(() => {
    dispatch(getReflections(user.id))
    return () => {
      dispatch(unloadReflections())
    }
  }, [dispatch, user.id])

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

  useEffect(() => {
    dispatch(getWeeksReflections(user.id))
    return () => {
      dispatch(unloadReflections())
    }
  }, [dispatch, user.id])


  return (
    isLoaded ? (
      habits.length > 0 ? (
        <div>
          <div className={styles.hello}>How green is your garden?</div>
          <div className={styles.container}>
            <div>
              <form onSubmit={handleSubmit}>
                <select
                  onChange={(e) => setTimeframe(e.target.value)}
                  className={styles.select}
                >
                  <option value='all'>view your progress since you added each habit</option>
                  <option value='week'>view your progress in the last week</option>
                  <option value='year'>view your progress in the last year</option>
                </select>
              </form>
            </div>
            {timeframe === 'all' && reduxReflections.length > 0 &&
              reduxReflections.map((reflection, idx) => (
                <ReflectionBucket
                  habitName={reduxReflectionKeys[idx]}
                  reflection={reflection}
                  key={idx}
                />
              ))
            }
            {timeframe === 'year' &&
              habits.map((habit, idx) => (
                <ReflectionBucketNew
                  key={idx}
                  iterable={habit.year}
                  habit={habit}
                />
              ))
            }
            {timeframe === 'week' &&
              habits.map((habit, idx) => (
                <ReflectionBucketNew
                  key={idx}
                  iterable={habit.week}
                  habit={habit}
                />
              ))
            }
          </div>
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
