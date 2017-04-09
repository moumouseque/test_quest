export const GET_CLIENTSTATUSES = 'GET_CLIENTSTATUSES';

export function getClientStatuses(clientStatuses) {
  return {
    type: GET_CLIENTSTATUSES,
    payload: clientStatuses
  }
}

export function fetchGetClientStatuses() {
  return dispatch => {
    fetch('http://58ea5e779f206f1200b374a8.mockapi.io/clientStatuses')
    .then(response => response.json())
    .then(data => dispatch(getClientStatuses(data)))
    .catch(ex => console.log('connection error', ex))
  }
}
