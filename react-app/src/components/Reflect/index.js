import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReflections, getWeeksReflections } from '../../store/reflect'
import ReflectionBucket from './ReflectionBucket'
import styles from './Reflect.module.css'
import NoHabits from '../parts/NoHabits'

const Reflect = () => {
  const [timeframe, setTimeframe] = useState('')
  const dispatch = useDispatch()

  const user = useSelector(state => state.session.user)
  const reduxHabits = useSelector(state => Object.values(state.habits.habits))
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
    dispatch(getWeeksReflections(user.id))
  }, [dispatch, user.id])


  return (
    <div>
      <div className={styles.hello}>How green is your garden?</div>
      <div className={styles.container}>
        {/* <div>
          <form onSubmit={handleSubmit}>
            <select
              onChange={(e) => setTimeframe(e.target.value)}
            >
              <option
                value='all'
              >all</option>
              <option
                value='other'
              >other</option>
            </select>
            <button>Submit</button>
          </form>
        </div> */}
        {reduxHabits.length === 0 &&
          <div className={styles.smaller}>
            <NoHabits />
          </div>
        }
        {reduxReflections.length > 0 &&
          reduxReflections.map((reflection, idx) => (
            <ReflectionBucket
              habitName={reduxReflectionKeys[idx]}
              reflection={reflection}
              key={idx}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Reflect
