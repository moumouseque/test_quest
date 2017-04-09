import { GET_DEALSTATUSES } from '../actions/DealStatusesActions';

const initialState = {
  dealStatusesList: []
}

export default function dealStatuses(state = initialState, action) {
  switch (action.type) {
    case GET_DEALSTATUSES:
      return { ...state, dealStatusesList: action.payload }
    default:
      return state;
  }
}
