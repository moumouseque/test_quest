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
    fetch( process.env.NODE_ENV !== 'production' ? 'http://localhost:3004/clients' : 'https://demo1896123.mockable.io/clients')
    .then(response => response.json())
    .then(data => dispatch(getClient(data)))
    .catch(ex => console.log('connection error', ex))
  }
}

export function editClient(client, id) {
  return {
    type: EDIT_CLIENT,
    client: client,
    id: id
  }
}

export function fetchEditClient(id, client) {
  return dispatch => {
    fetch( process.env.NODE_ENV !== 'production' ? `http://localhost:3004/clients/${id}` : `https://demo1896123.mockable.io/clients/${id}`, {
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
