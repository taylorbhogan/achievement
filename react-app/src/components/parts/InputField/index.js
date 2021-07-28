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
      />
    </div>
  )
}

export default InputField
