const SET_ACHIEVEMENT = 'habits/SET_ACHIEVEMENT'



const setAchievement = (habit) => ({
  type: SET_ACHIEVEMENT,
  habit
})

export const createAchievement = (achievement) => async (dispatch) => {
  try {
    const res = await fetch('api/achievements',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(achievement)
    });
    if (!res.ok) throw res;
    const data = await res.json();
    if (!data.errors) {
      dispatch(setAchievement(data));
    }
    return data;
  } catch (resError) {
    return resError;
  }
}

const initialState = {
  achievements: {},
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACHIEVEMENT:
      return { ...state, achievements: { ...state.achievements, [action.achievement.id]: action.achievement}}
    default:
      return state;
  }
}
