export const GET_ACTIVITIES = 'GET_ACTIVITIES';

export function getActivities(activities) {
  return {
    type: GET_ACTIVITIES,
    payload: activities
  }
}

export function fetchGetActivities() {
  return dispatch => {
    fetch('http://58ea5e779f206f1200b374a8.mockapi.io/activities')
    .then(response => response.json())
    .then(data => dispatch(getActivities(data)))
    .catch(ex => console.log('connection error', ex))
  }
}
