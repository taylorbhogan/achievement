const SET_COLORS = 'colors/SET_COLORS'
const SET_COLOR = 'colors/SET_COLOR'

const setColors = (colors) => ({
  type: SET_COLORS,
  colors
})

const setColor = (color) => ({
  type: SET_COLOR,
  color
})

export const getColors = () => async (dispatch) => {
  try {
    const res = await fetch('api/colors')
    if (!res.ok) throw res;
    const colors = await res.json()
    dispatch(setColors(colors))
    return colors;
  } catch (resError) {
    return resError
  }
}

export const createColor = (color) => async (dispatch) => {
  try {
    const res = await fetch('api/colors', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(color)
    });
    console.log(res);
    if (!res.ok) throw res;
    const data = await res.json();
    if (!data.errors) {
      dispatch(setColor(data));
    }
    return data;
  } catch (resError) {
    return resError;
  }
}


const initialState = {
  colors: {},
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_COLOR:
      return { ...state, colors: { ...state.colors, ...action.color}}
    case SET_COLORS:
      return { ...state, colors: { ...state.colors, ...action.colors}}
    default:
      return state;
  }
}
