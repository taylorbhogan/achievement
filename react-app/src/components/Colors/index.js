import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getColors } from '../../store/color'
import LoadingContent from '../LoadingContent'
import styles from './Colors.module.css'
import InputField from '../parts/InputField'
import { SwatchesPicker } from 'react-color'
import ColorSelector from './ColorSelector'

const Colors = ({setHue}) => {
  const dispatch = useDispatch()
  const [colors, setColors] = useState([])
  const [color, setColor] = useState({h: 291.38121546961315, s: 0.5000000000000001, l: 0.2, a: 1})

  useEffect(() => {
    (async () => {
    const dbColors = await dispatch(getColors())
    setColors(Object.values(dbColors))
  })()
  },[dispatch])

  const handleColorChange = (color) => {
    // console.log(color.hsl);
    setColor(color)
    setHue(color.hsl.h)
  }

  return (
    <div className={styles.colorList}>
      {/* <SwatchesPicker
        color={color}
        onChangeComplete={handleChangeComplete}
      /> */}
      <ColorSelector
        color={color}
        onChangeComplete={ handleColorChange }
      />
      {/* <InputField
       name='color'
       type='text'
       placeholder=''
       value={color}
       onChange={(e) => setColor(e.target.value)}
      /> */}
      {/* {colors.length > 0
        ? <select
            onChange={(e) => setHue(e.target.value)}
          >
            {colors.map((color, idx) => (
              <option
                key={idx}
                value={color}
              >{color}</option>
            ))}
          </select>
        : <LoadingContent />} */}
    </div>
  )
}

export default Colors
