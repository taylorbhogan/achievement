import styles from './InputField.module.css'

const InputField = ({ name, type, placeholder, value, onChange, setFunction }) => {
  // console.log('inputfield');
  if (type === 'textarea'){
    return (
        <div>
          <textarea
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            // rows='4'
            className={styles.textAreaInput}
            />
        </div>
    )
  } else if (type === 'datetime-local'){
    const today = new Date()
    const max = today.toISOString().split('.')[0]
    // console.log('---------max----------',max);
    return (
      <div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={styles.textInput}
          max={max}
          />
      </div>
  )
  } else{

  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={setFunction}
        className={styles.textInput}
      />
    </div>
  )}
}

export default InputField
