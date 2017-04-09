import { GET_CLIENT, EDIT_CLIENT } from '../actions/ClientActions';

const initialState = {
  clientShow: []
}

export default function client(state = initialState, action) {
  switch (action.type) {
    case GET_CLIENT:
      return { ...state, clientShow: action.payload }
    case EDIT_CLIENT:
      const newClientShow = state.clientShow.map( (client) => {
         return client.id === action.payload.id ? action.payload.client : client;
      });
      return { ...state, clientShow: newClientShow }
    default:
      return state;
  }
}
