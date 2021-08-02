const SET_HABIT = 'habits/SET_HABIT'
const SET_HABITS = 'habits/SET_HABITS'

const setHabit = (habit) => ({
  type: SET_HABIT,
  habit
})

const setHabits = (habits) => ({
  type: SET_HABITS,
  habits
})


export const getHabits = (userId) => async (dispatch) => {
  try {
    const res = await fetch(`api/habits/users/${userId}/week`)
    // const res = await fetch(`api/habits/users/${userId}`)
    if (!res.ok) throw res;
    const habits = await res.json()
    dispatch(setHabits(habits))
    return habits;
  } catch (resError) {
    return resError
  }
}

export const getAllHabitCubes = (userId) => async (dispatch) => {
  try {
    const res = await fetch(`api/habits/users/${userId}/all`)
    if (!res.ok) throw res;
    const habits = await res.json()
    dispatch(setHabits(habits))
    return habits;
  } catch (resError) {
    return resError
  }
}



export const createHabit = (habit) => async (dispatch) => {
  try {
    const res = await fetch('api/habits',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(habit)
    });
    if (!res.ok) throw res;
    const data = await res.json();
    if (!data.errors) {
      dispatch(setHabit(data));
    }
    return data;
  } catch (resError) {
    return resError;
  }
}

export const editHabit = (habit) => async (dispatch) => {
  try {
  const res = await fetch (`api/habits/${habit.id}`,{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(habit)
  });
  if (!res.ok) throw res;
  const data = await res.json();
  if (!data.errors) {
    dispatch(setHabit(data));
  }
  return data;
  } catch (resError) {
  return resError;
  }

}

export const deleteHabit = (habitId) => async (dispatch) => {
  try {
    const res = await fetch (`api/habits/${habitId}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw res;
    const data = await res.json();
    if (!data.errors) {
      dispatch(setHabit(data));
    }
    return data;
    } catch (resError) {
    return resError;
    }

}

const initialState = {
  habits: {},
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_HABITS:
      return { ...state, habits: { ...state.habits, ...action.habits} }
    case SET_HABIT:
      return { ...state, habits: { ...state.habits, [action.habit.id]: action.habit}}
    default:
      return state;
  }
}
