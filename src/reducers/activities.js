import { GET_ACTIVITIES } from '../actions/ActivitiesActions';

const initialState = {
  activitiesList: []
}

export default function activities(state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return { ...state, activitiesList: action.payload }
    default:
      return state;
  }
}
