
const ADD_HABIT = 'habit/ADD_HABIT'

const addHabitToStore = (habit) => ({
  type: ADD_HABIT,
  action: habit
})

export const createHabit = (habit) => async (dispatch) => {
  const response = await fetch('api/habits', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({habit})
  })

  if (response.ok) {
    const data = await response.json()
    const newHabit = data.newHabit

    dispatch(addHabitToStore(newHabit))
    return newHabit;
  } else if (response.status < 500){
    const data = await response.json()
    if (data.errors){
      return data.errors
    }
  } else {
    return ['an error occurred. please try again']
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
