import { useState } from 'react'
import styles from './Colors.module.css'
import ColorSelector from './ColorSelector'

const Colors = ({ setHue }) => {
  const [color, setColor] = useState({ h: 291.38121546961315, s: 0.5000000000000001, l: 0.2, a: 1 })

  const handleColorChange = (color) => {
    setColor(color)
    setHue(color.hsl.h)
  }

  return (
    <div className={styles.colorList}>
      <ColorSelector
        color={color}
        onChangeComplete={handleColorChange}
      />
    </div>
  )
}

export default Colors
