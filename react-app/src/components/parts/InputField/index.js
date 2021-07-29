import styles from './InputField.module.css'

const InputField = ({ name, type, placeholder, value, onChange }) => {
  if (type === 'textarea'){
    return (
        <div>
          <textarea
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows='4'
            className={styles.textAreaInput}
            />
        </div>
    )
  }

  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.textInput}
      />
    </div>
  )
}

export default InputField
