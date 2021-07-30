const SET_ACHIEVEMENT = 'achievements/SET_ACHIEVEMENT'



const setAchievement = (achievement) => ({
  type: SET_ACHIEVEMENT,
  achievement
})

export const createAchievement = (achievement) => async (dispatch) => {
  try {
    console.log('----------store achievement---------',achievement);
    const res = await fetch('api/achievements',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(achievement)
    });
    console.log(res);
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
      return {...state, achievements: { ...state.achievements, [action.achievement.id]: action.achievement}}
    default:
      return state;
  }
}
