const DeleteButton = ({ handleDelete }) => {
  return (
    <div>
      <button
        onClick={handleDelete}
      >Delete</button>
    </div>
  )
}

export default DeleteButton
