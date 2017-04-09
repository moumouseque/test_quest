import { combineReducers } from 'redux';
import activities from './activities';
import clients from './clients';
import clientStatuses from './clientStatuses';
import dealStatuses from './dealStatuses';

export default combineReducers({
  activities,
  clients,
  clientStatuses,
  dealStatuses
});
