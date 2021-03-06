const SET_ACHIEVEMENT = 'achievements/SET_ACHIEVEMENT'
const REMOVE_ACHIEVEMENT = 'achievements/REMOVE_ACHIEVEMENT'
const SET_ACHIEVEMENTS = 'achievements/SET_ACHIEVEMENTS'
const UNLOAD_ACHIEVEMENTS = 'achievements/UNLOAD_ACHIEVEMENTS'


const setAchievement = (achievement) => ({
  type: SET_ACHIEVEMENT,
  achievement
})

const removeAchievement = (achievementId) => ({
  type: REMOVE_ACHIEVEMENT,
  achievementId
})


const setAchievements = (achievements) => ({
  type: SET_ACHIEVEMENTS,
  achievements
})

export const unloadAchievements = () => ({
  type: UNLOAD_ACHIEVEMENTS
})

export const getAchievements = (userId) => async (dispatch) => {
  try {
    const res = await fetch(`api/achievements/users/${userId}`)
    if (!res.ok) throw res;
    const achievements = await res.json()
    dispatch(setAchievements(achievements))
    return achievements;
  } catch (resError) {
    return resError
  }
}


export const createAchievement = (achievement) => async (dispatch) => {
  try {
    const res = await fetch('api/achievements', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(achievement)
    });
    // console.log(res);
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

export const editAchievement = (achievement) => async (dispatch) => {
  try {
    const res = await fetch(`api/achievements/${achievement.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(achievement)
    });
    // console.log(res);
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

export const deleteAchievement = (achievementId) => async (dispatch) => {
  try {
    const res = await fetch(`api/achievements/${achievementId}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw res;
    const data = await res.json();

    if (!data.errors) {
      dispatch(removeAchievement(data.id));
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
    case SET_ACHIEVEMENTS:
      return { ...state,
        achievements: {
          // ...state.achievements,
          ...action.achievements}}
    case SET_ACHIEVEMENT:
      return { ...state, achievements: { ...state.achievements, [action.achievement.id]: action.achievement } }
    case REMOVE_ACHIEVEMENT:
      const newState = { ...state, achievements: { ...state.achievements } }
      delete newState.achievements[action.achievementId]
      return { ...newState }
    case UNLOAD_ACHIEVEMENTS:
      return {
        ...initialState,
        achievements: {
          ...initialState.achievements
        }
      }
    default:
      return state;
  }
}
