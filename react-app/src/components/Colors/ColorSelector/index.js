import { CustomPicker } from "react-color";
import { Hue } from 'react-color/lib/components/common';
import styles from './ColorSelector.module.css'

const ColorSelector = ({ hex, hsl, onChange }) => {

  const CustomPointer = () => {
    return (
      <div style={{
        width: '18px',
        height: '18px',
        transform: 'translate(-9px, -1px)',
        // backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
      }}
      />
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.colorContainer}>
        <Hue
          hsl={hsl}
          onChange={onChange}
          pointer={CustomPointer}
        />
        <div
          className={styles.swatch}
          style={{ background: `${hex}` }}
        />
      </div>
    </div>
  )
}

export default CustomPicker(ColorSelector)
