import { CustomPicker } from "react-color";
import { Hue } from 'react-color/lib/components/common';
import styles from './ColorSelector.module.css'

const ColorSelector = ({ hex, hsl, onChange }) => {

  const CustomPointer = () => {
    return (
      <div style={{
        width: '9px',
        height: '18px',
        transform: 'translate(-9px, -1px)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
        border: '3px solid white',
        borderRadius: '2px',
      }}
      />
    )
  }


  return (
    <div className={styles.container}>
      <div className={styles.left}>
      <div className={styles.header}>Select a color to display your progress with.</div>
      <div className={styles.colorContainer}>
        <Hue
          hsl={hsl}
          onChange={onChange}
          pointer={CustomPointer}
        />
      </div>
      </div>
      <div className={styles.right}>
        <div
          className={styles.swatch}
          style={{ background: `hsl(${+(hsl.h).toFixed(2)}, 100%, 50%)` }}
        />
      </div>
    </div>
  )
}

export default CustomPicker(ColorSelector)
