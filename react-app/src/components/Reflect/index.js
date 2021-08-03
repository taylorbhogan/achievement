import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReflections } from '../../store/reflect'
import ReflectionBucket from './ReflectionBucket'
import styles from './Reflect.module.css'

const Reflect = () => {
  const [timeframe, setTimeframe] = useState('')
  const dispatch = useDispatch()

  const user = useSelector(state => state.session.user)
  const reduxReflections = useSelector(state => Object.values(state.reflections.reflections))


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (timeframe === 'all'){
      dispatch(getReflections(user.id))
    }
  }


  return (
    <div>
      <div className={styles.hello}>Hello from Reflect</div>
      <div className={styles.container}>
        <div>
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
        </div>
        {reduxReflections.length > 0 &&
          reduxReflections.map((reflection, idx) => (
            <ReflectionBucket
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
