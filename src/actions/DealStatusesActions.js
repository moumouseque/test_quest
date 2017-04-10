export const GET_DEALSTATUSES = 'GET_DEALSTATUSES';

export function getDealStatuses(dealStatuses) {
  return {
    type: GET_DEALSTATUSES,
    payload: dealStatuses
  }
}

export function fetchGetDealStatuses() {
  return dispatch => {
    fetch('https://demo1896123.mockable.io/dealStatuses')
    .then(response => response.json())
    .then(data => dispatch(getDealStatuses(data)))
    .catch(ex => console.log('connection error', ex))
  }
}
