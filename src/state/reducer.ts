import { combineReducers } from 'redux';

import { Action } from './actions';

import { 
  State as WorkloadsState, 
  reducer as workloadReducer,
} from './workloads';


export interface State {
  workloads: WorkloadsState;
}

export const reducer = combineReducers<State, Action>({
  workloads: workloadReducer,
});
