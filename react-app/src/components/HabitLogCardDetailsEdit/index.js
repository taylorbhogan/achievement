import DeleteButton from '../parts/DeleteButton'
import InputField from '../parts/InputField'
import ActionButton from '../parts/ActionButton'
import CloseButton from '../parts/CloseButton'

import styles from './HabitLogCardDetailsEdit.module.css'


const HabitLogCardDetailsEdit = ({
  habit,
  handleDelete,
  setIsEditable,
  blurb,
  setBlurb,
  stellarBlurb,
  setStellarBlurb,
  target,
  setTarget
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.close}><CloseButton onClick={() => setIsEditable(false)}/></div>
        <div className={styles.info}>
          <div className={styles.left}>
            <div className={styles.header}>Achievement:</div>
              <InputField
                name='blurb'
                type='textarea'
                placeholder='15x 3/day'
                value={blurb}
                onChange={(e) => setBlurb(e.target.value)}
              />
          </div>
          <div className={styles.center}>
            <div className={styles.header}>Stellar Achievement:</div>
              <InputField
                name='stellar_blurb'
                type='textarea'
                placeholder='100 in one day'
                value={stellarBlurb}
                onChange={(e) => setStellarBlurb(e.target.value)}
              />
          </div>
          <div className={styles.right}>
            <div className={styles.header}>Weekly Target:</div>
            <div className={styles.target}>
              <InputField
                name='target'
                type='number'
                placeholder='7'
                value={target}
                onChange={(e) => setTarget(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.buttonContainer}>
          <DeleteButton handleDelete={handleDelete}/>
          <ActionButton buttonText={'save changes'}/>
        </div>
      </div>
    </div>
  )
}

export default HabitLogCardDetailsEdit
