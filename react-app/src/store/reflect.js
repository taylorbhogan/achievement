const SET_REFLECTIONS = 'reflections/SET_REFLECTIONS'
const SET_WEEKS_REFLECTIONS = 'reflections/SET_WEEKS_REFLECTIONS'

const setReflections = (reflections) => ({
  type: SET_REFLECTIONS,
  reflections
})

const setWeeksReflections = (weeksReflections) => ({
  type: SET_WEEKS_REFLECTIONS,
  weeksReflections
})

export const getReflections = (userId) => async (dispatch) => {
  console.log('------------------------------hit the reflect store');
  try {
    const res = await fetch(`api/habits/users/${userId}/reflection/created`)
    if (!res.ok) throw res;
    const reflections = await res.json()

    dispatch(setReflections(reflections))
    return reflections;
  } catch (resError) {
    return resError
  }
}
export const getWeeksReflections = (userId) => async (dispatch) => {
  console.log('------------------------------hit the reflect store');
  try {
    const res = await fetch(`api/habits/users/${userId}/reflection/week`)
    if (!res.ok) throw res;
    const weeksReflections = await res.json()

    dispatch(setWeeksReflections(weeksReflections))
    return weeksReflections;
  } catch (resError) {
    return resError
  }
}

const initialState = {
  reflections: {},
  weeksReflections: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_REFLECTIONS:
      return {
        ...state,
        reflections: {
          ...state.reflections,
          ...action.reflections
        },
        weeksReflections: {
          ...state.weeksReflections
        }
      }
    case SET_WEEKS_REFLECTIONS:
      return {
        ...state,
        reflections: {
          ...state.reflections,
        },
        weeksReflections: {
          ...state.weeksReflections,
          ...action.weeksReflections
        }
      }
    default:
      return state;
  }
}
