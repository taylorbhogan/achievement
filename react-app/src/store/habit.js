const ADD_HABIT = 'habit/ADD_HABIT'


const habitToStore = (habit) => ({
  type: ADD_HABIT,
  habit
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
      dispatch(habitToStore(data));
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
    case ADD_HABIT:
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
