import { useState } from 'react'

import { Modal } from '../../context/Modal'

import CreateHabitForm from '../CreateHabitForm'
// import styles from './CreateHabitButton.module.css'

function CreateHabitButton({componentStyle, toggleMenu}) {
  const [ showNewHabitForm, setShowNewHabitForm ] = useState(false)
  const [ hovered, setHovered ] = useState(false)

const handleClick = () => {
//  toggleMenu()
  setShowNewHabitForm(true)
}

  const hover = () => {
    setHovered(!hovered)
  }

  let style;
  if (componentStyle === 'green') {
    style = {
      background: 'none',
      backgroundColor: 'var(--green2)',
      border: 'none',
      borderRadius: 'var(--buttonBorderRadius2)',
      padding: '.8rem 1.5rem .8rem 1.5rem',
      cursor: 'pointer',
    }
    if (hovered){
      style = {
        ...style,
        backgroundColor: 'var(--green3)',
      }
    }
  } else if (componentStyle === 'gray'){
    style = {
      margin: 'none',
      padding: '20px',
      background: 'none',
      backgroundColor: 'var(--gray2)',
      border: 'none',
      font: 'inherit',
      color: 'inherit',
      cursor: 'pointer',
      width: '100%',
      textAlign: 'left',
    }
    if (hovered){
      style = {
        ...style,
        backgroundColor: 'var(--gray1)',
      }
    }
  }

  return (
    <div>
      <button
        onMouseEnter={hover}
        onMouseLeave={hover}
        style={style}
        // className={styles.button}
        onClick={handleClick}
      >Add a Habit</button>
      {showNewHabitForm && (
        <Modal onClose={() => setShowNewHabitForm(false)}>
          <CreateHabitForm setShowNewHabitForm={setShowNewHabitForm} />
        </Modal>
      )}
    </div>
  )
}

export default CreateHabitButton
