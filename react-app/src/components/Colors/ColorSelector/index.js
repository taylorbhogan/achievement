import { CustomPicker } from "react-color";
import { Hue, SliderPointer } from 'react-color/lib/components/common';
import styles from './ColorSelector.module.css'

const ColorSelector = ({ hex, hsl, onChange }) => {

  return (
    <div className={styles.container}>
      <div className={styles.colorContainer}>
        <Hue
          hsl={hsl}
          onChange={onChange}
        />
        <SliderPointer />
        <div
          className={styles.swatch}
          style={{ background: `${hex}` }}
        />
      </div>
    </div>
  )
}

export default CustomPicker(ColorSelector)
