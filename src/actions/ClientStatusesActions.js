export const GET_CLIENTSTATUSES = 'GET_CLIENTSTATUSES';

export function getClientStatuses(clientStatuses) {
  return {
    type: GET_CLIENTSTATUSES,
    payload: clientStatuses
  }
}

export function fetchGetClientStatuses() {
  return dispatch => {
    fetch('https://demo1896123.mockable.io/clientStatuses')
    .then(response => response.json())
    .then(data => dispatch(getClientStatuses(data)))
    .catch(ex => console.log('connection error', ex))
  }
}
