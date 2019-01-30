import { combineEpics, Epic, ofType } from 'redux-observable';
import { map, tap, ignoreElements } from 'rxjs/operators';

import { Action } from '../actions';
import { State } from '../reducer';


type AppEpic = Epic<Action, Action, State>;


// import { WorkloadService } from './services';
// const workloadService = new WorkloadService();
// workloadService.create({ complexity: 1 })
//   .then(console.log.bind(console, 'workloadService create'));


const logWorkloadSubmissions: AppEpic = (action$, state$) => (
  action$.pipe(
    ofType('WORKLOAD_SUBMIT'),
    map(action => action.payload),
    tap((payload) => console.log('Workload submitted', payload)),
    ignoreElements(),
  )
);


export const epics = combineEpics(
  logWorkloadSubmissions,
);

export default epics;