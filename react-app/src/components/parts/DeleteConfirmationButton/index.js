import { useState } from "react"
import { FaTrashAlt } from 'react-icons/fa'
import { IconContext } from "react-icons";
import CloseButton from "../CloseButton";
import DeleteButton from "../DeleteButton";
import DeleteConfirmation from "../DeleteConfirmation";
import styles from './DeleteConfirmationButton.module.css'

const DeleteConfirmationButton = ({ handleDelete }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  const deleteHandler = () => {
    handleDelete()
    setShowDeleteConfirmation(false)
  }

  const handleClick = () => {
    console.log('click');
    setShowDeleteConfirmation(true)
  }

  const otherStyles = {
    div: {
      position: 'absolute',
      top: '-60px',
      left: '90px',
      minWidth: '135px',
      fontSize: '13px',
      padding: '10px',
      backgroundColor: 'var(--gray3)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: 'var(--borderRadiusMenu)',
    },
    top: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%',
    }
  }


  const delStyles = {
    div: {
      position: 'absolute',
      top: '-50px',
      left: '102%',
      minWidth: '135px',
      fontSize: '13px',
      padding: '10px',
      backgroundColor: 'var(--gray3)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: 'var(--borderRadiusMenu)',
    },
    top: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%',
    }
  }

  return (
    <>
      <button
        className={styles.button}
        onClick={handleClick}
        id='deleteConfirmationButton'
      >
        <IconContext.Provider value={{ className: "react-icons" }}>
          <FaTrashAlt />
        </IconContext.Provider>
      </button>
      {showDeleteConfirmation &&
        // <DeleteConfirmation
        //   handleDelete={deleteHandler}
        //   closeDeleteConfirmation={() => setShowDeleteConfirmation(false)}
        //   componentLocation={'habitLog'} />
        <div style={delStyles.div}>
          <div style={delStyles.top}>
            <div>
              <div>Deleting is</div>
              <div>permanent.</div>
            </div>
            <CloseButton closeForm={() => setShowDeleteConfirmation(false)} />
          </div>
          <DeleteButton handleDelete={handleDelete} />
        </div>
      }
    </>
  )
}

export default DeleteConfirmationButton
