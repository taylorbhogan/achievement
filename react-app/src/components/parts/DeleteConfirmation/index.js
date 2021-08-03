import CloseButton from '../CloseButton'
import DeleteButton from '../DeleteButton'

const DeleteConfirmation = ({closeDeleteConfirmation, handleDelete, componentLocation}) => {
  console.log(componentLocation);
let styles;
  if (componentLocation === 'achievementLog'){
    styles = {
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
  } else if (componentLocation === 'habitLog') {
    styles = {
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
  }

  return (
    <div style={styles.div}>
      <div style={styles.top}>
        <div>
          <div>Deleting is</div>
          <div>permanent.</div>
        </div>
        <CloseButton closeForm={closeDeleteConfirmation}/>
      </div>
      {/* <div>permanent.</div> */}
      <DeleteButton handleDelete={handleDelete}/>
    </div>
  )
}

export default DeleteConfirmation
