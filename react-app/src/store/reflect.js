const SET_REFLECTIONS = 'reflections/SET_REFLECTIONS'

const setReflections = (reflections) => ({
  type: SET_REFLECTIONS,
  reflections
})

export const getReflections = (userId) => async (dispatch) => {
  console.log('------------------------------hit the reflect store');
  try {
    const res = await fetch(`api/habits/users/${userId}/test`)
    if (!res.ok) throw res;
    const reflections = await res.json()
    
    dispatch(setReflections(reflections))
    return reflections;
  } catch (resError) {
    return resError
  }
}

const initialState = {
  reflections: {},
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_REFLECTIONS:
      return { ...state, reflections: { ...state.reflections, ...action.reflections} }
    default:
      return state;
  }
}
