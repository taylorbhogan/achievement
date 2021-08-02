import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllHabitCubes } from '../../store/habit'

import styles from './Reflect.module.css'

const Reflect = () => {
  const [timeframe, setTimeframe] = useState('')
  const [allHabitCubes, setAllHabitCubes] = useState([])
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (timeframe === 'all'){
      const dbHabits = await dispatch(getAllHabitCubes())
      setAllHabitCubes(dbHabits)
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
              >Week</option>
            </select>
            <button>Submit</button>
          </form>
        </div>
        {allHabitCubes &&
          allHabitCubes.map(cube => (
            <div>Cube</div>
          ))
        }
      </div>
    </div>
  )
}

export default Reflect
