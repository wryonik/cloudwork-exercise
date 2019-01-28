import { combineReducers } from 'redux';

import { 
  Store as WorkloadsStore, 
  Action as WorkloadActions,
  reducer as workloadReducer,
} from './workloads';


export type Action = WorkloadActions;

export interface Store {
  workloads: WorkloadsStore;
}

export const reducers = combineReducers<Store, Action>({
  workloads: workloadReducer,
});
