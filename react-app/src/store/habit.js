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
  } catch (error) {
    return error;
  }
}


const initialState = {}

export default function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case SET_HABIT:
      newState = {}
      newState[action.habit.id] = action.habit
      return {
        ...state,
        ...newState
      };
    default:
      return state;
  }
}
