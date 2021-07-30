import { FaRegWindowClose } from 'react-icons/fa'
import { IconContext } from "react-icons";
import styles from './CloseButton.module.css'

function CloseButton() {
  return (
    <div className={styles.div}>
      <button className={styles.button}>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <FaRegWindowClose />
        </IconContext.Provider>
      </button>
    </div>
  )
}

export default CloseButton
