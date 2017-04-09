import { GET_CLIENTSTATUSES } from '../actions/ClientStatusesActions';

const initialState = {
  clientStatusesList: []
}

export default function clientStatuses(state = initialState, action) {
  switch (action.type) {
    case GET_CLIENTSTATUSES:
      return { ...state, clientStatusesList: action.payload }
    default:
      return state;
  }
}
