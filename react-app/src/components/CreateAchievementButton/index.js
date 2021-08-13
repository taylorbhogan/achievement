import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createAchievement } from "../../store/achievement"
import { getHabits, unloadHabits, getHabit } from "../../store/habit"

import styles from './CreateAchievementButton.module.css'

const CreateAchievementButton = ({habit, setErrors, wasAccomplished, id}) => {
  // const [isChecked, setIsChecked] = useState(false)
  const dispatch = useDispatch()

  // const user = useSelector(state => state.session.user)

  // useEffect(() => {
  //   dispatch(getHabits(user.id))
  // },[isChecked, dispatch, user.id])
  // useEffect(() => {
  //   dispatch(getHabit(habit.id))
  // },[isChecked, dispatch, habit.id])

  // if (isChecked) dispatch(getHabit(habit.id))

  // useEffect(() => {
  //   return () => {
  //     dispatch(unloadHabits())
  //   }
  // }, [dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let createdAt = new Date()
    if ( id === 5 ){
      createdAt.setDate(createdAt.getDate() - 1)
    } else if ( id === 4 ){
      createdAt.setDate(createdAt.getDate() - 2)
    } else if ( id === 3 ){
      createdAt.setDate(createdAt.getDate() - 3)
    } else if ( id === 2 ){
      createdAt.setDate(createdAt.getDate() - 4)
    } else if ( id === 1 ){
      createdAt.setDate(createdAt.getDate() - 5)
    } else if ( id === 0 ){
      createdAt.setDate(createdAt.getDate() - 6)
    }

    const achievement = {
      habit_id: habit.id,
      is_stellar: false,
      created_at: createdAt,
    }
    // console.log('----------component achievement---------',achievement);
    const dbAchievement = await dispatch(createAchievement(achievement))
    if (dbAchievement.errors) {
      setErrors(dbAchievement.errors)
    } else {
      // setIsChecked(!isChecked)
      dispatch(getHabit(habit.id))
    }
  }

  const jsStylesActive = {
    margin: '0',
    padding: '0',
    // margin: '5px',
    border: 'none',
    width: 'var(--dashCubeDimension)',
    height: 'var(--dashCubeDimension)',
    borderRadius: 'var(--dashCubeBorderRadius)',
    backgroundColor: `hsl(${habit.color}, 100%, 50%)`,
    cursor: 'pointer',
  }
  const jsStylesInactive = {
    margin: '0',
    padding: '0',
    // margin: '5px',
    border: 'none',
    width: 'var(--dashCubeDimension)',
    height: 'var(--dashCubeDimension)',
    borderRadius: 'var(--dashCubeBorderRadius)',
    backgroundColor: 'gray',
    cursor: 'pointer',
  }


  return (
      <form onSubmit={handleSubmit}>
    <div className={styles.cubeWrapper}>
        {/* {!isChecked && <button className={styles.achieveCube}></button>}
        {isChecked && <button className={styles.achieveCubeChecked}></button>} */}
        <button style={wasAccomplished ? jsStylesActive : jsStylesInactive} className={styles.button}></button>
    </div>
      </form>
  )
}

export default CreateAchievementButton
