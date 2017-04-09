export const GET_DEALSTATUSES = 'GET_DEALSTATUSES';

export function getDealStatuses(dealStatuses) {
  return {
    type: GET_DEALSTATUSES,
    payload: dealStatuses
  }
}

export function fetchGetDealStatuses() {
  return dispatch => {
    fetch('http://58ea5e779f206f1200b374a8.mockapi.io/dealStatuses')
    .then(response => response.json())
    .then(data => dispatch(getDealStatuses(data)))
    .catch(ex => console.log('connection error', ex))
  }
}
