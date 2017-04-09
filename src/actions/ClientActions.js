export const GET_CLIENT = 'GET_CLIENT';
export const EDIT_CLIENT = 'EDIT_CLIENT';

export function getClient(client) {
  return {
    type: GET_CLIENT,
    payload: client
  }
}

export function fetchGetClient() {
  return dispatch => {
    fetch('http://58ea5e779f206f1200b374a8.mockapi.io/clients')
    .then(response => response.json())
    .then(data => dispatch(getClient(data)))
    .catch(ex => console.log('connection error', ex))
  }
}

export function editClient(client, id) {
  return {
    type: EDIT_CLIENT,
    payload: [client, id]
  }
}

export function fetchEditClient(id, client) {
  return dispatch => {
    fetch(`http://58ea5e779f206f1200b374a8.mockapi.io/clients/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(client)
    })
    .then(response => response.json())
    .then(data => dispatch(editClient(data, id)))
    .catch(ex => console.log('connection error', ex))
  }
}
