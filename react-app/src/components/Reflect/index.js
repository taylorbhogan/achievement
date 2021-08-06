import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReflections, getWeeksReflections } from '../../store/reflect'
import { getHabits } from '../../store/habit'
import ReflectionBucket from './ReflectionBucket'
import ReflectionBucketYear from './ReflectionBucketYear'
import ReflectionBucketWeek from './ReflectionBucketWeek'
import ReflectionBucketNew from './ReflectionBucketNew'
import styles from './Reflect.module.css'
import NoHabits from '../parts/NoHabits'

const Reflect = () => {
  const [timeframe, setTimeframe] = useState('all')
  const dispatch = useDispatch()

  const user = useSelector(state => state.session.user)
  const reduxHabits = useSelector(state => Object.values(state.habits.habits))

  const yearArray = [];
  reduxHabits.forEach(habit => {
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
  }, [dispatch, user.id])
  useEffect(() => {
    dispatch(getHabits(user.id))
  }, [dispatch, user.id])
  useEffect(() => {
    dispatch(getWeeksReflections(user.id))
  }, [dispatch, user.id])


  return (
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
              {/* <option value='other'>other</option> */}
            </select>
            {/* <button>Submit</button> */}
          </form>
        </div>
        {reduxHabits.length === 0 &&
          <div className={styles.smaller}>
            <NoHabits />
          </div>
        }
        {timeframe === 'all' && reduxReflections.length > 0 &&
          reduxReflections.map((reflection, idx) => (
            <ReflectionBucket
              habitName={reduxReflectionKeys[idx]}
              reflection={reflection}
              key={idx}
            />
          ))
        }
        {timeframe === 'year' && reduxHabits.length > 0 &&
          reduxHabits.map((habit, idx) => (
            <ReflectionBucketNew
              // habitName={reduxReflectionKeys[idx]}
              // reflection={reflection}
              key={idx}
              // idx={idx}
              habit={habit}
            />
          ))
        }
        {timeframe === 'week' && reduxHabits.length > 0 &&
          reduxHabits.map((habit, idx) => (
            <ReflectionBucketWeek
              // habitName={reduxReflectionKeys[idx]}
              // reflection={reflection}
              key={idx}
              // idx={idx}
              habit={habit}
            />
          ))
        }
        {/* {timeframe === 'year' && reduxHabits.length > 0 &&
          yearArray.map((reflection, idx) => (
            <ReflectionBucketYear
              habitName={reduxReflectionKeys[idx]}
              reflection={reflection}
              key={idx}
              idx={idx}
            />
          ))
        } */}
      </div>
    </div>
  )
}

export default Reflect
